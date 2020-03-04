const fs = require('fs')
const path = require('path')
const capitalize = require('capitalize')

const name = process.argv[2]
const arrName = name.split('_')
let nameCapitalize = ''

arrName.map(name => {
  nameCapitalize += capitalize(name)
})

const createMigration = () => {
  try {
    if (!name) throw new Error('No specified migrations name')

    let migration = `import { MigrationInterface, QueryRunner, Table } from 'typeorm'\n\n`
    migration += `export class ${nameCapitalize}Migration${Date.now()} implements MigrationInterface {\n`
    migration += `  async up(queryRunner: QueryRunner): Promise<any> {\n`
    migration += `    await queryRunner.createTable(\n`
    migration += `      new Table({\n`
    migration += `        name: 'tbl_users',\n`
    migration += `        columns: [\n`
    migration += `          {\n`
    migration += `            name: 'id',\n`
    migration += `            type: 'uuid',\n`
    migration += `            isPrimary: true,\n`
    migration += `            isGenerated: true\n`
    migration += `          },\n`
    migration += `        ]\n`
    migration += `      }),\n`
    migration += `      true\n`
    migration += `    )\n`
    migration += `  }\n\n`
    migration += `  async down(queryRunner: QueryRunner): Promise<any> {\n`
    migration += `    await queryRunner.dropTable('tbl_users')\n`
    migration += `  }\n`
    migration += `}\n`
    fs.writeFile(path.join(__dirname, '..', 'src', 'database', 'migrations', `${Date.now()}-${name}.ts`), migration, (err) => {
      if (err) throw err
    })
  } catch (error) {
    console.log(error)
  }
}

createMigration()