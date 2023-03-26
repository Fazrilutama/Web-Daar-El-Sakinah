import { Table } from "@nextui-org/react";

export default function ProgramPondok() {
  return (
    <div className="container mx-auto mt-24 xl:mt-28">
        <p className="text-center">
            Jadwal Pengajian Pondok Pesantren Daar El Sakinah
        </p>

    <Table
      aria-label="Jadwal Kajian Pondok Pesantren Daar El Sakinah"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>HARI</Table.Column>
        <Table.Column>JAM</Table.Column>
        <Table.Column>KAJIAN</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Tony Reichert</Table.Cell>
          <Table.Cell>CEO</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Zoey Lang</Table.Cell>
          <Table.Cell>Technical Lead</Table.Cell>
          <Table.Cell>Paused</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Jane Fisher</Table.Cell>
          <Table.Cell>Senior Developer</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>William Howard</Table.Cell>
          <Table.Cell>Community Manager</Table.Cell>
          <Table.Cell>Vacation</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </div>

  );
}
