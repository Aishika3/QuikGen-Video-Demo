import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './styles.css';

function ExcelReader(props) {
  const [users, setUsers] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(e.target.files[0].size > 1000000){
        alert("Too large");
        return;
    }

    

    const reader = new FileReader();

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const firstColumnData = excelData.map((row) => ({"name":row[0], "phone":row[1], "mail":"-"}));
      const secondColumnData = excelData.map((row) => ([row[0],row[1],row[2]]));
      
      props.setData(JSON.stringify(firstColumnData));
      console.log(typeof(firstColumnData));
      setUsers(secondColumnData);
      console.log(users);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <section className='holder'>
    <div className='mx-auto file-input'>
      <div className='file-uploader'>
        <label className='text-white'>Upload your data: </label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <div className='table'>
      {/* h-[500px] overflow-auto bg-[#bbb] */}
        <ul>
            <div className='table-heading'>
            {/* bg-[#fff] grid grid-cols-3 border-2 border-solid border-[#000] rounded-[5px] */}
              <li>Name</li>
              <li>Phone No.</li>
              <li>Email</li>
            </div>

            {users.map((value, index) => (
              <div key={"key"+index} className="table-data">
                <li className='input-name'>{value[0] ? value[0] : "Anonymous"}</li>
                <li className='input-number'>{value[1] ? value[1] : "-"}</li>
                <li className='input-mail'>{value[2] ? value[2] : "-"}</li>
              </div>
            ))}
        </ul>
      </div>
    </div>
    </section>
  );
}
// className={index%2 ? 'grid grid-cols-3 bg-[#fff] border-2 border-t-0 border-solid border-[#000]' : 'grid grid-cols-3 border-2 border-t-0 border-solid border-[#000]'}

export default ExcelReader;