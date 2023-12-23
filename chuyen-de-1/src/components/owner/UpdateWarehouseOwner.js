import React, { useState, useEffect } from "react";
import "../../theme/AddPost.css";
import axios from "axios";
import { BASE_URL } from "../../config";
import { jwtDecode } from "jwt-decode";
import { useLocation } from 'react-router-dom';
import Navbar from '../HomeNavbar';
import Footer from '../HomeFooter';

const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
};

let statusS = [
    { sta: "true" },
    { sta: "false" }
]

export default function UpdateWarehouseOwner() {
    const [warehouse, setWarehouse] = useState();
    const [category, setCategory] = useState();
    const [warehouseName, setWarehouseName] = useState();
    const [address, setAddress] = useState();
    const [categoryId, setCategoryId] = useState();
    const [currentCapacity, setCurrentCapacity] = useState();
    const [capacity, setCapacity] = useState();
    const [monney, setMonney] = useState();
    const [status, setStatus] = useState();
    const [description, setDescription] = useState();
    const [imageWarehouse, setImageWarehouse] = useState();
    const [file, setFile] = useState([]);
    const [fileStatus, setFileStatus] = useState(false);
    const location = useLocation();
    let token = localStorage.getItem("jsonwebtoken");
    let idUser = jwtDecode(token)

    useEffect(() => {
        axios.get(BASE_URL + '/warehouse/getAWarehouse', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                id: location.state.id
            }
        }).then((res) => {
            setWarehouse(res.data.warehouse);
        }).catch((error) => {
            console.log(error.message);
        });

        axios.get(BASE_URL + '/warehouse/category/list', {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then((res) => {
            setCategory(res.data.categories);
        }).catch((error) => {
            console.log(error.message);
        });
    }, []);

    const handleChangeWarehouseName = (event) => {
        setWarehouseName(event.target.value)
    };

    const handleChangeAddress = (event) => {
        setAddress(event.target.value)
    };

    const handleChangeCatagory = (event) => {
        setCategoryId(event.target.value)
    };

    const handleChangeCurrentCapacity = (event) => {
        setCurrentCapacity(event.target.value)
    };

    const handleChangeCapacity = (event) => {
        setCapacity(event.target.value)
    };

    const handleChangeMonney = (event) => {
        setMonney(event.target.value)
    };

    const handleChangeStatus = (event) => {
        setStatus(event.target.value)
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isEmptyValue(description) || file.length || !isEmptyValue(warehouseName) || !isEmptyValue(address) || !isEmptyValue(categoryId) || !isEmptyValue(currentCapacity) || !isEmptyValue(capacity) || !isEmptyValue(monney) || !isEmptyValue(status)) {
            axios.put(BASE_URL + "/warehouse/updateWarehouse/" + location.state.id, {
                "wareHouseName": warehouseName,
                "address": address,
                "category": categoryId,
                "currentCapacity": currentCapacity,
                "capacity": capacity,
                "monney": monney,
                "status": status,
                "description": description,
                "imageWarehouse": imageWarehouse,
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                }).then((respone) => {
                    console.log(respone);
                    alert("Cập nhật kho hàng thành công");
                    window.location.href = "ListWarehouseOwner";
                }).catch((err) => {
                    alert("Cập nhật kho hàng thất bại");
                    console.log(err)
                });
        } else {
            alert("Yêu cầu nhập đầy đủ thông tin");
        }
    };

    const handleFileChange = (e) => {
        const files = e.target.files;

        const arrayFile = Array.from(files).map((file) => ({
            file: file,
        }));
        setFile((prevImages) => [...prevImages, ...arrayFile])
        setFileStatus(true)
    };

    if (fileStatus) {
        const formData = new FormData();

        for (let i = 0; i < file.length; i++) {
            formData.append("file", file[i].file);
        }
        
        formData.append('upload_preset', 'ImageProject');
        axios.put("https://api.cloudinary.com/v1_1/dborrd4h5/image/upload",
            formData).then((respone) => {
                setImageWarehouse(respone.data.secure_url)
            }).catch((err) => {
                console.log(err)
            });
        setFileStatus(false)
    }

    return (
        <>
            <Navbar />
            <div class="container py-2">
                <h1>Cập nhật thông tin kho hàng</h1>
                <div class="formbold-main-wrapper">
                    <div class="formbold-form-wrapper border border-5 p-3">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div>
                                    <label for="wareHouseName" class="formbold-form-label" style={{ fontSize: 20, marginTop: 10 }}>Warehouse Name</label>
                                    {warehouse ? (<input
                                        type="text"
                                        name="wareHouseName"
                                        id="wareHouseName"
                                        placeholder={warehouse.wareHouseName}
                                        class="formbold-form-input"
                                        onChange={handleChangeWarehouseName}
                                    />) : (
                                        <div>Lỗi</div>
                                    )}
                                </div>
                                <div>
                                    <label for="address" class="formbold-form-label" style={{ fontSize: 20, marginTop: 10 }}>Address</label>
                                    {warehouse ? (<input
                                        type="text"
                                        name="address"
                                        id="address"
                                        placeholder={warehouse.address}
                                        class="formbold-form-input"
                                        onChange={handleChangeAddress}
                                    />) : (
                                        <div>Lỗi</div>
                                    )}
                                </div>
                                <div>
                                    <label for="category" class="formbold-form-label">Category</label>
                                    {warehouse ? (<select className="form-select"
                                        onChange={handleChangeCatagory}
                                    >
                                        <option></option>
                                        {category
                                            && category.length > 0
                                            && category.map(item => (
                                                <option value={item._id}>{item.name}</option>
                                            ))}
                                    </select>) : (<div>Lỗi</div>)}

                                </div>
                                <div>
                                    <label for="currentCapacity" class="formbold-form-label" style={{ fontSize: 20, marginTop: 10 }}>Current Capacity</label>
                                    {warehouse ? (<input
                                        type="text"
                                        name="currentCapacity"
                                        id="currentCapacity"
                                        placeholder={warehouse.currentCapacity + " " + warehouse.category.acreage}
                                        class="formbold-form-input"
                                        onChange={handleChangeCurrentCapacity}
                                    />) : (
                                        <div>Lỗi</div>
                                    )}
                                </div>
                                <div>
                                    <label for="capacity" class="formbold-form-label" style={{ fontSize: 20, marginTop: 10 }}>Capacity</label>
                                    {warehouse ? (<input
                                        type="text"
                                        name="capacity"
                                        id="capacity"
                                        placeholder={warehouse.capacity + " " + warehouse.category.acreage}
                                        class="formbold-form-input"
                                        onChange={handleChangeCapacity}
                                    />) : (
                                        <div>Lỗi</div>
                                    )}
                                </div>
                                <div>
                                    <label for="monney" class="formbold-form-label" style={{ fontSize: 20, marginTop: 10 }}>Monney</label>
                                    {warehouse ? (<input
                                        type="text"
                                        name="monney"
                                        id="monney"
                                        placeholder={warehouse.monney + "VNĐ"}
                                        class="formbold-form-input"
                                        onChange={handleChangeMonney}
                                    />) : (
                                        <div>Lỗi</div>
                                    )}
                                </div>
                                <div>
                                    <label for="status" class="formbold-form-label" style={{ fontSize: 20, marginTop: 10 }}>Status</label>
                                    {warehouse ? (<select className="form-select"
                                        onChange={handleChangeStatus}
                                    >
                                        <option></option>
                                        <option value={statusS[0].sta}>{statusS[0].sta}</option>
                                        <option value={statusS[1].sta}>{statusS[1].sta}</option>
                                    </select>) : (<div>Lỗi</div>)}

                                </div>
                                <div>
                                    <label for="description" class="formbold-form-label" style={{ fontSize: 20, marginTop: 10 }}>Description</label>
                                    {warehouse ? (<input
                                        type="text"
                                        name="description"
                                        id="description"
                                        placeholder={warehouse.description}
                                        class="formbold-form-input"
                                        onChange={handleChangeDescription}
                                    />) : (
                                        <div>Lỗi</div>
                                    )}
                                </div>
                            </div>

                            <div class="formbold-input-file">
                                <label for="upload" class="formbold-input-label">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1670_1531)">
                                            <path d="M12.3568 6.4644L7.64349 11.1786C7.5639 11.2554 7.50041 11.3474 7.45674 11.4491C7.41307 11.5507 7.39008 11.6601 7.38912 11.7707C7.38815 11.8814 7.40924 11.9911 7.45114 12.0935C7.49304 12.1959 7.55492 12.289 7.63316 12.3672C7.71141 12.4455 7.80445 12.5073 7.90686 12.5492C8.00928 12.5912 8.11901 12.6122 8.22966 12.6113C8.34031 12.6103 8.44966 12.5873 8.55133 12.5436C8.653 12.5 8.74495 12.4365 8.82182 12.3569L13.536 7.64356C14.0049 7.17468 14.2683 6.53875 14.2683 5.87565C14.2683 5.21255 14.0049 4.57661 13.536 4.10773C13.0671 3.63885 12.4312 3.37544 11.7681 3.37544C11.105 3.37544 10.469 3.63885 10.0002 4.10773L5.28599 8.8219C4.89105 9.20701 4.57652 9.6667 4.36062 10.1743C4.14473 10.6819 4.03178 11.2274 4.02832 11.779C4.02487 12.3306 4.13097 12.8774 4.34049 13.3877C4.55 13.8979 4.85876 14.3615 5.24884 14.7516C5.63892 15.1416 6.10256 15.4503 6.61287 15.6597C7.12318 15.8692 7.67 15.9752 8.2216 15.9717C8.77321 15.9681 9.31862 15.8551 9.82621 15.6391C10.3338 15.4232 10.7934 15.1086 11.1785 14.7136L15.8927 10.0002L17.071 11.1786L12.3568 15.8927C11.8151 16.4344 11.172 16.8641 10.4643 17.1573C9.75649 17.4505 8.99791 17.6014 8.23182 17.6014C7.46574 17.6014 6.70716 17.4505 5.99939 17.1573C5.29162 16.8641 4.64853 16.4344 4.10682 15.8927C3.56512 15.351 3.13542 14.7079 2.84225 14.0002C2.54908 13.2924 2.39819 12.5338 2.39819 11.7677C2.39819 11.0016 2.54908 10.2431 2.84225 9.5353C3.13542 8.82753 3.56512 8.18443 4.10682 7.64273L8.82182 2.9294C9.60767 2.17041 10.6602 1.75043 11.7527 1.75992C12.8451 1.76942 13.8902 2.20762 14.6627 2.98015C15.4353 3.75269 15.8735 4.79774 15.883 5.89023C15.8925 6.98271 15.4725 8.03522 14.7135 8.82106L10.0002 13.5369C9.76794 13.7691 9.49226 13.9532 9.18887 14.0788C8.88548 14.2045 8.56032 14.2691 8.23195 14.2691C7.90357 14.269 7.57843 14.2043 7.27507 14.0786C6.97171 13.9529 6.69607 13.7687 6.46391 13.5365C6.23174 13.3043 6.04759 13.0286 5.92196 12.7252C5.79633 12.4218 5.7317 12.0966 5.73173 11.7683C5.73177 11.4399 5.79649 11.1148 5.92219 10.8114C6.04788 10.508 6.2321 10.2324 6.46432 10.0002L11.1785 5.28606L12.3568 6.4644Z" fill="#07074D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1670_1531">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <input type="file" name="upload" id="upload" onChange={handleFileChange} />
                                    {file.length === 0 ? (<div>Chọn hình ảnh</div>) : (<img class="img-fluid img-responsive rounded product-image" src={imageWarehouse} style={{ width: 200, height: 200 }} />)}
                                </label>
                            </div>

                            <button class="formbold-btn">
                                Cập nhật
                            </button>
                            <a class="formbold-btn" style={{ marginLeft: 10, textDecoration: "none" }} href="ListWarehouseOwner">
                                Quay Lại
                            </a>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
