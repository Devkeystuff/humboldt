import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import { useRouter } from "next/dist/client/router";


const Place: NextPage = ({ info }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
    <div>
        <p>Id: {info.id}</p>
        <p>{info.name}</p>
        <p>{info.phone}</p>
        <p>{info.email}</p>
    </div>);
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { uuid } = context.query;
    const res: Response = await fetch(`https://jsonplaceholder.typicode.com/users/${uuid}`);
    const info = await res.json();

    if (!info) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {
            info,
        },
    };
}


export default Place;