const fs = require('fs')
const path = require('path')
const capitalize = require('capitalize')
const pluralize = require('pluralize')
const debug = require('debug')

/**
 * get argument name
 */
const name = process.argv[2]
/**
 * split to get array of word
 */
const arrName = name.split('_')
let nameCapitalize = ''
let pluralName = ''

arrName.map((name, index) => {
  /**
   * capitalize each word
   */
  nameCapitalize += capitalize(name)
  /**
   * pluralize tabel name
   */
  if (index + 1 === arrName.length) pluralName += `_${pluralize.plural(name)}`
  else pluralName = `_${name}`
})

const createMigration = () => {
  try {
    /**
     * argument checking
     */
    if (!name) throw new Error('No specified migrations name')

    /**
     * read migration based script
     */
    let migration = fs.readFileSync(path.join(__dirname, 'migration.txt'))
    /**
     * replace to improve migration
     */
    migration = migration
      .toString()
      .replace('${nameCapitalize}Migration${Date.now()}', `${nameCapitalize}Migration${Date.now()}`)
      .replace('tbl_name', `tbl${pluralName}`)
      .replace(`queryRunner.dropTable('tbl_name')`, `queryRunner.dropTable('tbl${pluralName}')`)

    /**
     * write script to folder
     */
    const migrationFolder = path.join(__dirname, '..', 'src', 'database', 'migrations', `${Date.now()}-${name}.migration.ts`)
    fs.writeFile(migrationFolder, migration, (err) => {
      if (err) throw err
    })

    debug('migration:success')(`${path.join(__dirname, '..', 'src', 'database', 'migrations', `${Date.now()}-${name}.migration.ts`)}`)
  } catch (error) {
    debug('migration:error')(error)
  }
}

createMigration()