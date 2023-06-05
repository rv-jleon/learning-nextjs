import { useRouter } from "next/router";

const ClientProjects = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    // load data...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: 'junior', clientprojectid: "projecta"}
    });
  };

  return (
    <div>
      <h1>ClientProjects</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjects;
