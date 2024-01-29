import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createData, deleteData, showData } from "../redux/apislice/imageDataSlice";
import { Button } from "@material-tailwind/react";

const CreatedData = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { images } = useSelector((state) => state.image);

    useEffect(() => {
        dispatch(showData());
    }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(createData(formData));
        navigate("/");
    }

    return (
        <div>
            <div className="flex justify-center flex-col items-center py-32">
                <h1 className="text-2xl uppercase mb-3 font-bold text-gray-800">Upload Image</h1>
                <form onSubmit={handelSubmit} className="flex flex-col items-center">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border-2 rounded px-5 p-3 text-gray-900 mb-2 w-full"
                        name="name"
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        className="border-2 rounded px-5 p-3 text-gray-900 mb-2 w-full"
                        name="imageurl"
                        onChange={handleInputChange}
                        required
                    />
                    <button className="bg-cyan-600 p-3 rounded text-white font-bold w-full" type="submit">Submit</button>
                </form>
            </div>
            <div className="flex justify-center flex-col items-center pb-60 overflow-x-scroll">
                <h1 className="text-2xl uppercase mb-3 font-bold text-gray-800">All - API Data</h1>
                <table className="border text-center border-collapse ">
                    <tr className="bg-cyan-600 text-white">
                        <th className="px-5 py-2">Name</th>
                        <th className="px-5 py-2">Image</th>
                        <th className="px-5 py-2">Action</th>
                    </tr>
                    {images.map((item) => (
                        <tr key={item.id} className="border">
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-4 flex justify-center items-center">
                                <img src={item.imageurl} alt={item.name} className="h-16 w-16 rounded-full cursor-pointer" />
                            </td>
                            <td className="px-4 py-2">
                                <Button className="bg-green-700 w-full mb-2" onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
                                <Button className="bg-red-700 w-full" onClick={() => dispatch(deleteData(item.id))}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default CreatedData