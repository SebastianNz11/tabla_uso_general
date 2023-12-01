import { SimpleTable } from "./components/SimpleTable";
import data from "./components/MOCK_DATA.json";

export const App = () => {
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "Mi ID",
    },

    {
      header: "Nombres",
      accessorKey: "name",
      footer: "Mi nombre",
    },
    {
      header: "Apellido",
      accessorKey: "lastname",
      footer: "Mi apellido",
    },

    {
      header: "Email",
      accessorKey: "email",
      footer: "Mi email",
    },
    {
      header: "Country",
      accessorKey: "country",
      footer: "Mi pais",
    },
    {
      header: "Fecha de nacimiento",
      accessorKey: "dateOfBirth",
      footer: "Mi fecha de nacimiento",
    },
  ];

  return (
    <div>
      <SimpleTable data={data} columns={columns} />
    </div>
  );
};
