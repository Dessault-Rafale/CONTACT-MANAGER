import Upper from "./Components/Upper portion/Upper";
// import Lower from "./Components/Lower portion/Lower";
import Edit from "./Components/Edit/Edit";
import { useState } from 'react'
import { useEffect } from "react";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Delete from '@mui/icons-material/Delete';
import BorderColor from '@mui/icons-material/BorderColor';
import axios from 'axios';
import './Components/Lower portion/lower.css'
import Lower from "./Components/Lower portion/Lower";


function App() {

  // localStorage.setItem('bgcolor', 'red');
  // localStorage.getItem('bgcolor');

  const [input, setInput] = useState({})
  const [edit, setedit] = useState(null)
  const [allcontacts, setAllcontacts] = useState([])
  const [update, setUpdate] = useState({})

  console.log("all contacts======>", allcontacts);

  console.log(
    "dssfdddddddddddddddddddddd");


  const inputchange = (event) => {
    console.log(event);
    const name = event.target.name
    const value = event.target.value
    // const {name,value}=event.target;
    console.log(name, value);
    setInput({ ...input, [name]: value })
    console.log(input);

  }










  const submitform = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5000/api/addcontact", input)
      .then((res) => {
        window.location.reload()
        console.log("response====>", res)
      })
  }



  useEffect(() => {
    axios.get("http://localhost:5000/api/viewcontact")
      .then((response) => {
        console.log("apidata==>", response.data.data);
        setAllcontacts(response.data.data)
      })
  }, [])


    const deletecontact = (e) => {
      console.log(e);
      axios.get(`http://localhost:5000/api/deletecontact/${e}`)
        .then((res) => {
          if (res.data.success == true) {

            window.location.reload()
          }


        })
    }







  const editcontact = (id) => {
    console.log("edit==========>", id);
    axios.get(`http://localhost:5000/api/editcontact/${id}`)
      .then((res) => {
        console.log("editdata=======>", res.data);
        setedit(res.data.data)
        console.log(res.data.data);

      })

    console.log("edit==>", edit);
  }



  const changeupdate = (event) => {
    const name = event.target.name;
    const value = event.target.value



    setedit({
      ...edit,
      [name]: value
    })
console.log(edit);
  }

  const updatecontact = () => {
    console.log(edit);
    
    axios.post("http://localhost:5000/api/updatecontact", edit)
      .then((res) => {
        console.log("response====>", res)
        window.location.reload();
      })





  }




  return (
    <div style={{ height: "auto", backgroundColor: "black" }}>

      <Upper changeData={inputchange} formsubmit={submitform} edit={edit} updation={changeupdate} changeupdate={changeupdate} dataupdate={updatecontact}/>
      <Lower allcontacts={allcontacts} deletecontact={deletecontact} editcontact={editcontact} />


    </div>
  );
}

export default App;




