import React from "react";
import style from "../Css/Form.module.css";
import { useState } from "react";

const Form = () => {
  const [empcode, setEmpcode] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lanme, setLanme] = useState("");
  const [email, setEmail] = useState("");
  const [fathername, setFathername] = useState("");
  const [mno, setMno] = useState("");
  const [dob, setDob] = useState("");
  const [desig, setDesig] = useState("");
  const [dcode, setDcode] = useState("");
  const [djoin, setDjoin] = useState("");
  const [dleave, setDleave] = useState("");
  const [sal, setSal] = useState("");
  const [gen, setGen] = useState("Select Gender");
  const [accno, setAccno] = useState("");
  const [ifsccode, setIfsccode] = useState("");
  const [bname, setBname] = useState("");
  const [ocity, setOcity] = useState("");
  const [ostate, setOstate] = useState("");
  const [oadd1, setOadd1] = useState("");
  const [oadd2, setOadd2] = useState("");
  const [oadd3, setOadd3] = useState("");
  const [opin, setOpin] = useState("");
  const [empstatus, setEmpstatus] = useState("Select Status");

  // req identify
  const [req1, setReq1] = useState(false);
  const [req2, setReq2] = useState(false);
  const [req3, setReq3] = useState(false);
  const [req4, setReq4] = useState(false);
  const [req5, setReq5] = useState(false);
  const [req6, setReq6] = useState(false);
  const [req7, setReq7] = useState(false);
  const [req8, setReq8] = useState(false);
  const [req9, setReq9] = useState(false);
  const [req10, setReq10] = useState(false);
  const [req11, setReq11] = useState(false);
  const [req12, setReq12] = useState(false);
  const [req13, setReq13] = useState(false);
  const [req14, setReq14] = useState(false);
  const [req15, setReq15] = useState(false);

  function handleempcode(event) {
    setReq1(false);
    setEmpcode(event.target.value);
  }

  function handlefname(event) {
    setReq2(false);
    setFname(event.target.value);
  }

  function handlemname(event) {
    setMname(event.target.value);
  }

  function handlelanme(event) {
    setLanme(event.target.value);
  }

  function handleemail(event) {
    setReq15(false);
    setEmail(event.target.value);
  }

  function handlefathername(event) {
    setFathername(event.target.value);
  }

  function handlemno(event) {
    setReq3(false);
    setMno(event.target.value);
  }

  function handledob(event) {
    setDob(event.target.value);
  }

  function handledesig(event) {
    setDesig(event.target.value);
  }

  function handledcode(event) {
    setDcode(event.target.value);
  }

  function handledjoin(event) {
    setReq4(false);
    setDjoin(event.target.value);
  }

  function handledleave(event) {
    setDleave(event.target.value);
  }

  function handlesal(event) {
    setReq5(false);
    setSal(event.target.value);
  }

  function handlegen(event) {
    setReq6(false);
    setGen(event.target.value);
  }

  function handleaccno(event) {
    setReq7(false);
    setAccno(event.target.value);
  }

  function handleifsccode(event) {
    setReq8(false);
    setIfsccode(event.target.value);
  }

  function handlebname(event) {
    setReq9(false);
    setBname(event.target.value);
  }

  function handleocity(event) {
    setReq10(false);
    setOcity(event.target.value);
  }

  function handleostate(event) {
    setReq11(false);
    setOstate(event.target.value);
  }

  function handleoadd1(event) {
    setReq12(false);
    setOadd1(event.target.value);
  }

  function handleoadd2(event) {
    setOadd2(event.target.value);
  }

  function handleoadd3(event) {
    setOadd3(event.target.value);
  }

  function handleopin(event) {
    setReq13(false);
    setOpin(event.target.value);
  }

  function handleempstatus(event) {
    setReq14(false);
    setEmpstatus(event.target.value);
  }

  async function adddata() {
    try {
      let res = await fetch("https://ins-f-backend.onrender.com/form/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          empcode: empcode,
          firstname: fname,
          mobileno: mno,
          email: email,
          DOJ: djoin,
          salary: sal,
          gender: gen,
          accno: accno,
          IFSCcode: ifsccode,
          bankname: bname,
          officecity: ocity,
          officestate: ostate,
          officeaddress1: oadd1,
          officepincode: opin,
          employeestatus: empstatus,
        }),
      });

      console.log("done");
    } catch (error) {
      console.log(error);
    }
  }

  function handlesubmit() {
    if (empcode.length > 0) {
      setReq1(false);
    } else {
      setReq1(true);
    }

    if (fname.length > 0) {
      setReq2(false);
    } else {
      setReq2(true);
    }

    const mobileNumberPattern = /^[0-9]{10}$/;
    if (mno.length > 0 && mobileNumberPattern.test(mno)) {
      setReq3(false);
    } else {
      setReq3(true);
    }

    if (djoin.length > 0) {
      setReq4(false);
    } else {
      setReq4(true);
    }
    if (sal.length > 0) {
      setReq5(false);
    } else {
      setReq5(true);
    }

    if (gen != "Select Gender") {
      setReq6(false);
    } else {
      setReq6(true);
    }
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;

    if (email.length > 0 && emailRegex.test(email)) {
      setReq15(false);
    } else {
      setReq15(true);
    }

    if (accno.length > 0) {
      setReq7(false);
    } else {
      setReq7(true);
    }

    if (ifsccode.length > 0) {
      setReq8(false);
    } else {
      setReq8(true);
    }

    if (bname.length > 0) {
      setReq9(false);
    } else {
      setReq9(true);
    }

    if (ocity.length > 0) {
      setReq10(false);
    } else {
      setReq10(true);
    }

    if (ostate.length > 0) {
      setReq11(false);
    } else {
      setReq11(true);
    }

    if (oadd1.length > 0) {
      setReq12(false);
    } else {
      setReq12(true);
    }

    if (opin.length > 0) {
      setReq13(false);
    } else {
      setReq13(true);
    }

    if (empstatus != "Select Status") {
      setReq14(false);
    } else {
      setReq14(true);
    }

    if (
      empcode.length > 0 &&
      fname.length > 0 &&
      mno.length > 0 &&
      mobileNumberPattern.test(mno) &&
      djoin.length > 0 &&
      sal.length > 0 &&
      email.length > 0 &&
      emailRegex.test(email) &&
      gen != "Select Gender" &&
      accno.length > 0 &&
      ifsccode.length > 0 &&
      bname.length > 0 &&
      ocity.length > 0 &&
      ostate.length > 0 &&
      oadd1.length > 0 &&
      opin.length > 0 &&
      empstatus != "Select Status"
    ) {
      adddata();
      console.log("Emp code is :", empcode);
      console.log("First name is :", fname);
      console.log("Email is :", email);
      console.log("Mobile number is :", mno);
      console.log("Date of joining is :", djoin);
      console.log("Monthly salary is :", sal);
      console.log("Gender is :", gen);
      console.log("Bank account number is :", accno);
      console.log("IFSC code is :", ifsccode);
      console.log("Bank name is :", bname);
      console.log("Office city is :", ocity);
      console.log("Office state is :", ostate);
      console.log("Office address 1 is :", oadd1);
      console.log("Office pincode is :", opin);
      console.log("Employee status is :", empstatus);
    }
  }

  return (
    <>
      <p className={style.add}>Add Employee</p>
      <hr className={style.ruller} />
      <div className={style.divd1}>
        <div className={style.inndiv}>
          <label className={style.lebell1}>
            Emp Code <span className={style.com}>*</span>
          </label>
          <input
            type="text"
            className={style.innerinput}
            value={empcode}
            onChange={handleempcode}
            placeholder="Enter employee code"
          />
          <p className={req1 ? style.block : style.none}>
            Required field can not empty
          </p>
        </div>
        <div className={style.inndiv}>
          <label className={style.lebell1}>
            First Name <span className={style.com}>*</span>
          </label>
          <input
            className={style.innerinput}
            type="text"
            value={fname}
            onChange={handlefname}
            placeholder="Enter first name"
          />
          <p className={req2 ? style.block : style.none}>
            Required field can not empty
          </p>
        </div>
        <div className={style.inndiv}>
          <label className={style.lebell1}>Middle Name</label>
          <input
            type="text"
            className={style.innerinput}
            value={mname}
            onChange={handlemname}
            placeholder="Enter middle name"
          />
        </div>
        <div className={style.inndiv}>
          <label className={style.lebell1}>Last Name</label>
          <input
            type="text"
            className={style.innerinput}
            value={lanme}
            onChange={handlelanme}
            placeholder="Enter last name"
          />
        </div>
        {/* done */}

        <div className={style.inndiv}>
          <label className={style.lebell1}>Email</label>
          <input
            type="email"
            className={style.innerinput}
            placeholder="Enter email"
            value={email}
            onChange={handleemail}
          />
          <p className={req15 ? style.block : style.none}>
            Required a valid email
          </p>
        </div>
        <div className={style.inndiv}>
          <label className={style.lebell1}>Father's Name</label>
          <input
            type="text"
            className={style.innerinput}
            placeholder="Enter father name"
            value={fathername}
            onChange={handlefathername}
          />
        </div>
        <div className={style.inndiv}>
          <label className={style.lebell1}>
            Mobile Number <span className={style.com}>*</span>
          </label>
          <input
            type="number"
            className={style.innerinput}
            placeholder="Enter mobile number"
            value={mno}
            onChange={handlemno}
          />
          <p className={req3 ? style.block : style.none}>
            enter valid mobile no
          </p>
        </div>
        <div className={style.inndiv}>
          <label className={style.lebell1}>DOB</label>
          <input
            type="date"
            className={style.innerinput}
            value={dob}
            onChange={handledob}
          />
        </div>

        <div className={style.inndiv}>
          <label className={style.lebell1}>Designation</label>
          <input
            type="text"
            className={style.innerinput}
            placeholder="Enter designation"
            value={desig}
            onChange={handledesig}
          />
        </div>
        <div className={style.inndiv}>
          <label className={style.lebell1}>Designation Code</label>
          <input
            type="number"
            className={style.innerinput}
            placeholder="Enter designation code"
            value={dcode}
            onChange={handledcode}
          />
        </div>
        <div className={style.inndiv}>
          <label className={style.lebell1}>
            Date of joining <span className={style.com}>*</span>
          </label>
          <input
            type="date"
            className={style.innerinput}
            value={djoin}
            onChange={handledjoin}
          />
          <p className={req4 ? style.block : style.none}>
            Required field can not empty
          </p>
        </div>
        <div className={style.inndiv}>
          <label className={style.lebell1}>Date of leaving</label>
          <input
            type="date"
            className={style.innerinput}
            value={dleave}
            onChange={handledleave}
          />
        </div>
        {/* done */}

        <div className={style.inndiv}>
          <label className={style.lebell1}>
            Monthly Salary <span className={style.com}>*</span>
          </label>
          <input
            type="number"
            className={style.innerinput}
            placeholder="Enter monthly salary"
            value={sal}
            onChange={handlesal}
          />
          <p className={req5 ? style.block : style.none}>
            Required field can not empty
          </p>
        </div>
        <div className={style.inndiv}>
          <label className={style.lebell1}>
            Gender <span className={style.com}>*</span>
          </label>
          <select className={style.genn1} value={gen} onChange={handlegen}>
            <option value="Select Gender">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <p className={req6 ? style.block : style.none}>
            Required field can not empty
          </p>
        </div>
        <div className={style.inndiv}>
          <label className={style.lebell1}>
            Bank account number <span className={style.com}>*</span>
          </label>
          <input
            type="number"
            className={style.innerinput}
            placeholder="Enter bank account number"
            value={accno}
            onChange={handleaccno}
          />
          <p className={req7 ? style.block : style.none}>
            Required field can not empty
          </p>
        </div>
        <div className={style.inndiv}>
          <label className={style.lebell1}>
            IFSC Code <span className={style.com}>*</span>
          </label>
          <input
            type="text"
            className={style.innerinput}
            placeholder="Enter ifsc code"
            value={ifsccode}
            onChange={handleifsccode}
          />
          <p className={req8 ? style.block : style.none}>
            Required field can not empty
          </p>
        </div>

        {/* done */}

        <div className={style.inndiv}>
          <label className={style.lebell1}>
            Bank Name <span className={style.com}>*</span>
          </label>
          <input
            type="text"
            className={style.innerinput}
            placeholder="Enter bank name"
            value={bname}
            onChange={handlebname}
          />
          <p className={req9 ? style.block : style.none}>
            Required field can not empty
          </p>
        </div>

        <div className={style.inndiv}>
          <label className={style.lebell1}>
            Office City <span className={style.com}>*</span>
          </label>
          <input
            type="text"
            className={style.innerinput}
            placeholder="Enter office city"
            value={ocity}
            onChange={handleocity}
          />
          <p className={req10 ? style.block : style.none}>
            Required field can not empty
          </p>
        </div>
        <div className={style.inndiv}>
          <label className={style.lebell1}>
            Office State <span className={style.com}>*</span>
          </label>
          <input
            type="text"
            className={style.innerinput}
            placeholder="Enter office state"
            value={ostate}
            onChange={handleostate}
          />
          <p className={req11 ? style.block : style.none}>
            Required field can not empty
          </p>
        </div>
        <div className={style.inndiv}>
          <label className={style.lebell1}>
            Office address 1 <span className={style.com}>*</span>
          </label>
          <input
            type="text"
            className={style.innerinput}
            placeholder="Enter office address 1"
            value={oadd1}
            onChange={handleoadd1}
          />
          <p className={req12 ? style.block : style.none}>
            Required field can not empty
          </p>
        </div>

        <div className={style.inndiv}>
          <label className={style.lebell1}>Office address 2</label>
          <input
            type="text"
            className={style.innerinput}
            placeholder="Enter office address 2"
            value={oadd2}
            onChange={handleoadd2}
          />
        </div>

        <div className={style.inndiv}>
          <label className={style.lebell1}>Office address 3</label>
          <input
            type="text"
            className={style.innerinput}
            placeholder="Enter office address 3"
            value={oadd3}
            onChange={handleoadd3}
          />
        </div>

        <div className={style.inndiv}>
          <label className={style.lebell1}>
            Office Pin Code <span className={style.com}>*</span>
          </label>
          <input
            type="number"
            className={style.innerinput}
            placeholder="Enter office pincode"
            value={opin}
            onChange={handleopin}
          />
          <p className={req13 ? style.block : style.none}>
            Required field can not empty
          </p>
        </div>

        <div className={style.inndiv}>
          <label className={style.lebell1}>
            Employee Status <span className={style.com}>*</span>
          </label>
          <select
            className={style.genn1}
            value={empstatus}
            onChange={handleempstatus}
          >
            <option value="Select Status">Select Status</option>
            <option value="Intern">Intern</option>
            <option value="Full Time">Full Time</option>
          </select>
          <p className={req14 ? style.block : style.none}>
            Required field can not empty
          </p>
        </div>
      </div>

      <button className={style.submitt1} onClick={handlesubmit}>
        Submit
      </button>
    </>
  );
};

export default Form;
