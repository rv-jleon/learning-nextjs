import { useRouter } from "next/router";

const SelectedClientProject = () => {
  const router = useRouter();

  console.log(router.query);
  
  return <div>SelectedClientProject</div>;
};

export default SelectedClientProject;
