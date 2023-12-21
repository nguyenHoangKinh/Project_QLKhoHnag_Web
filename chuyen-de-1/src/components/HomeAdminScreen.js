import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";


const HomeAdminScreen = () => {
  let Token = localStorage.getItem("jsonwebtoken");
  let idUser = jwtDecode(Token);

  const { Logout } = useContext(UserContext);

  const [ListAcount, setListAcount] = useState();
  //const [allId, setAllId] = useState([]);
  const [allIds, setAllIds] = useState([]);
  console.log(allIds);
  const LogoutToken = () => {
    Logout(Token);
  };

  const [idData, setIdData] = useState([]);


  

  // console.log(Token);

  // const navigate = useNavigate();
  const handleChange = (id) => {
    setAllIds((prevIds) => {
      if (prevIds.includes(id)) {
        // Nếu id đã tồn tại trong mảng, loại bỏ nó
        return prevIds.filter((prevId) => prevId !== id);
      } else {
        // Nếu id chưa tồn tại trong mảng, thêm nó vào
        return [...prevIds, id];
      }
    });
  };

  //dayne
  // const handleChange = (id) =>{
  //   if(id){
  //     // if(allId == true){
  //       setAllIds([...allIds,id])
  //       // console.log(id, "our value");
  //       //console.log(id);
  //     // }
  //     // setAllId(!allId)
  //   }
  //   // console.log(data);
  // }


  // const handleChange = (id) => {
  //   setAllIds((prevIds) => {
  //     if (id && !prevIds.includes(id)) {
  //       return [...prevIds, id];
  //     }
  //     return prevIds;
  //   });
  // };

//   function Acception (item){
// for (let i = 0; i < item.length; i++) {
//   const element = array[i];
  
// }
//   }

  function submitNAcount() {
    //console.log(id, Token);
    axios
      .put(
        `https://warehouse-management-api.vercel.app/v1/admin/deactivate-multiple-accounts`,
        {},
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          params:{
            id: allIds,
          }
        }
      )
      .then((res) => {
       // alert(res.response.data.message);
        alert("DeActive nhieu tai khoan thanh cong");
        //window.location.reload();
       //window.location.href = "/HomeAdminScreen";
       // console.log(res);
        // console.log(id);
         // Cập nhật trạng thái của component sau khi nhận phản hồi từ API
         setListAcount((prevList) => {
          // Thực hiện cập nhật danh sách tài khoản dựa trên phản hồi từ API (nếu cần)
          // Ví dụ: prevList.filter(item => !selectedIds.includes(item._id))

          // Reset mảng selectedIds về mảng trống để chuẩn bị cho các lựa chọn mới
          setAllIds([]);

          window.location.reload();
          
          return prevList;
        });
      })
      .catch((error) => console.log(error.message));
  }

  function handleSubmit(id) {
    //console.log(id, Token);
    axios
      .put(
        `https://warehouse-management-api.vercel.app/v1/admin/deactivate-account?id=${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        alert("deActive thanh cong");
        window.location.href = "/HomeAdminScreen";
        //console.log(res);
        // console.log(id);
      })
      .catch((err) => console.log(err));
  }

  // function handleSubmit(id) {
  //   console.log(Token);
  //   axios.put("https://warehouse-management-api.vercel.app/v1/admin/activate-account",
  //   {headers: {
  //     Authorization: Token
  //   }})
  //   .then((res) => {
  //     console.log(res);
  //     alert("Them thanh cong");
  //     navigate("/HomeScreen");
  //   })
  //   .catch((error) => {
  //     console.log(error.response.data.message);
  //   });
  //   }

  useEffect(() => {
    //call api
    axios
      .get(
        "https://warehouse-management-api.vercel.app/v1/admin/list-account-active",
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        setListAcount(res.data.accounts);
        //console.log(res.data.accounts);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  



  return (
    <>
      {/* <Link to="/ListAcontActive" className="btn btn-success my-3">
        AcountActive
      </Link> */}

      <>
        <div className="tabar"> 
        <h1>ListAcountActive</h1>
        <Link to="/ListAcountDeActive" className="btn btn-success my-3">
          ListAcountDeActive
        </Link>{" "}
        <button onClick={LogoutToken} className="btn btn-danger my-3">
          Logout
        </button>
        <button onClick={submitNAcount} className="btn btn-danger my-3">
          DeActiveMultil
        </button>
        </div>
        <div className="listwarehouseuser" >
          <table className="styled-table"
          style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>userName</th>
                <th>email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {ListAcount &&
                // ListAcount.length > 0 &&
                ListAcount.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                     
                      <input type="checkbox"
                      value={allIds} 
                      onChange={()=> {handleChange(item._id)}} />
                      <button
                        onClick={(e) => handleSubmit(item._id)}
                        className="btn btn-sm ms-4 btn-access bg-primary"
                      >
                        DeActive
                      </button>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </>
    </>
  );
};

export default HomeAdminScreen;
