import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateData } from "../redux/apislice/imageDataSlice";

const UpdatedData = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updateingData, setUpdateingData] = useState();
    const data = useSelector((state) => state.image.images);

    useEffect(() => {
        if (id) {
            const singleData = data.filter((ele) => ele.id === id);
            setUpdateingData(singleData[0]);
        }
    }, [id, data]);

    const newData = (e) => {
        setUpdateingData({ ...updateingData, [e.target.name]: e.target.value })
    }

    const handelUpdate = (e) => {
        e.preventDefault();
        dispatch(updateData(updateingData));
        navigate("/");
    }

    return (
        <div className="flex justify-center flex-col items-center py-32">
            <h1 className="text-2xl uppercase mb-3 font-bold text-gray-800">Update Data</h1>
            <img className="h-40 rounded-2xl my-5" src={updateingData && updateingData.imageurl} />
            <form onSubmit={handelUpdate} className="flex flex-col items-center">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border-2 rounded px-5 p-3 text-gray-900 mb-2 w-full"
                        name="name"
                        value={updateingData && updateingData.name}
                        onChange={newData}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        className="border-2 rounded px-5 p-3 text-gray-900 mb-2 w-full"
                        name="imageurl"
                        value={updateingData && updateingData.imageurl}
                        onChange={newData}
                        required
                    />
                    <button className=" bg-cyan-600 p-3 rounded text-white font-bold w-full" type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdatedData