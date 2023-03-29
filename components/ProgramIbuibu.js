import { Table } from "@nextui-org/react";

export default function ProgramIbuibu() {
  return (
    <div className="container mx-auto mt-24 xl:mt-28">
      <p className="text-center">
        Jadwal Pengajian Majelis Talim RBA
      </p>

      <Table
        className="-z-10"
        aria-label="Jadwal Kajian Pondok Pesantren Daar El Sakinah"
        css={{
          height: "auto",
          minWidth: "80%",
        }}
      >
        <Table.Header>
          <Table.Column>HARI</Table.Column>
          <Table.Column>JAM</Table.Column>
          <Table.Column>KAJIAN</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1" >
            <Table.Cell>Senin</Table.Cell>
            <Table.Cell>
              06:00 <br /> 17:00 <br /> 21:00
            </Table.Cell>
            <Table.Cell>
              Tafsir Jalalain <br /> Takrib <br /> Ihya Ulumuddin
            </Table.Cell>
          </Table.Row>
          <Table.Row key="2">
            <Table.Cell>Selasa</Table.Cell>
            <Table.Cell>
              06:00 <br /> 17:00 <br /> 21:00
            </Table.Cell>
            <Table.Cell>
              Tafsir Jalalain <br /> Takrib <br /> Ihya Ulumuddin
            </Table.Cell>
          </Table.Row>
          <Table.Row key="3">
            <Table.Cell>Rabu</Table.Cell>
            <Table.Cell>
              06:00 <br /> 17:00 <br /> 21:00
            </Table.Cell>
            <Table.Cell>
              Tafsir Jalalain <br /> Takrib <br /> Ihya Ulumuddin
            </Table.Cell>
          </Table.Row>
          <Table.Row key="4">
            <Table.Cell>Kamis</Table.Cell>
            <Table.Cell>
              06:00 <br /> 17:00 <br /> 21:00
            </Table.Cell>
            <Table.Cell>
              Tafsir Jalalain <br /> Takrib <br /> Ihya Ulumuddin
            </Table.Cell>
          </Table.Row>
          <Table.Row key="5">
            <Table.Cell>Jumat</Table.Cell>
            <Table.Cell>
              06:00 <br /> 17:00 <br /> 21:00
            </Table.Cell>
            <Table.Cell>
              Tafsir Jalalain <br /> Takrib <br /> Ihya Ulumuddin
            </Table.Cell>
          </Table.Row>
          <Table.Row key="6">
            <Table.Cell>Sabtu</Table.Cell>
            <Table.Cell>
              06:00 <br /> 17:00 <br /> 21:00
            </Table.Cell>
            <Table.Cell>
              Tafsir Jalalain <br /> Takrib <br /> Ihya Ulumuddin
            </Table.Cell>
          </Table.Row>
          <Table.Row key="7">
            <Table.Cell>Minggu</Table.Cell>
            <Table.Cell>
              06:00 <br /> 17:00 <br /> 21:00
            </Table.Cell>
            <Table.Cell>
              Tafsir Jalalain <br /> Takrib <br /> Ihya Ulumuddin
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
