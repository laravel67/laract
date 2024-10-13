import CardItem from '@/Components/CardItem';
import Navbar from '@/Components/Navbar';
import Pagination from '@/Components/Pagination';
import { Link, Head } from '@inertiajs/react';

export default function Homepage(props){
    // console.log(props)
    return (
        <>
            <div className="min-h-screen bg-slate-200 ">
            <Head title={props.title}/>
            <Navbar user={props.auth.user} />
            <div className="flex mt-20 py-10 justify-center flex-col lg:flex-row lg:flex-wrap lg:flex-stretch items-center gap-4">
                <CardItem posts={props.posts.data} />
            </div>
            <div className="justify-center items-center flex mb-24 pb-10">
                <Pagination meta={props.posts.meta}/>
            </div>

                {/* {props.posts ? props.posts.map((data, i)=> {
                    return(

                        <div key={i}>
                            <h1>{data.title}</h1>
                            <h3>{data.author}</h3>
                            <h3>{data.category}</h3>
                            <p>{data.description}</p>
                        </div>
                    )
                }):"Tidak ada Ongkos"} */}
            </div>
        </>
    )
}