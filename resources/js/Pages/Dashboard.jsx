import React, { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function Dashboard(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        category: '',
        description: '',
    });

    useEffect(() => {
        return () => {
            reset('title', 'category', 'description');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('post.store'));
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit}>
                                <TextInput
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder="Judul berita"
                                    className="input mb-10 input-bordered input-error w-full bg-white"
                                    value={data.title}
                                    onChange={handleOnChange}
                                />
                                <InputError message={errors.title} className="mt-2" />
                                <TextInput
                                    id="category"
                                    name="category"
                                    type="text"
                                    placeholder="Kategori berita"
                                    className="input mb-10 input-bordered input-error w-full bg-white"
                                    value={data.category}
                                    onChange={handleOnChange}
                                />
                                <InputError message={errors.category} className="mt-2" />
                                <TextInput
                                    id="description"
                                    name="description"
                                    className="textarea textarea-error w-full mb-10 bg-white"
                                    placeholder="Deskripsi"
                                    value={data.description}
                                    onChange={handleOnChange}
                                />
                                <InputError message={errors.description} className="mt-2" />
                                <button
                                    type="submit"
                                    className="btn btn-success float-end mb-3 text-white"
                                    disabled={processing}
                                >
                                    Publish Sekarang
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
