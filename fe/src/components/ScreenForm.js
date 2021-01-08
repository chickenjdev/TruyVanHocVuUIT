import React, { Component, useEffect, useState, useRef } from "react";
import '../styles/Screen.css';
import { Search } from 'react-bootstrap-icons';
import Title from './Title';
import axios from 'axios';

import 'pretty-checkbox/dist/pretty-checkbox.min.css'

//npm install react-datepicker --save
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// npm install moment --save
 import moment from "moment/dist/moment.js"

const requestPram = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    }
    // "command" : "cat:789812821",
    // "change" : false,
    // "env" : "prod",
    // "server" : "148"
}
const response = `" Đang tìm kiếm ... "`

function ScreenForm() {

    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState("{}");
    const [server, setServer] = useState("172.16.14.xxx");
    const [isProd, setIsProd] = useState(true);
    const [isDate, setIsDate] = useState(false);

    const [typeTrace,setTypeTrace] = useState("cat")
    const [dayPickS, setDayPickS] = useState("")
    const [changeS,setChangeS] = useState("true");
    const [envS,setEnvS] = useState("prod");
    const [serverS,setServerS] = useState("000");

    useEffect(() => { searchResult, searchValue, prettyPrint() });

    function prettyPrint() {

    }

    function traceLog(request) {
        console.log("search with value " + searchValue)
        setSearchResult(response + request)
        setSearchValue(request)
        const data = { 'bar': 123 };
        var body = { command: "cat:ssc_school_fees", change: false, env: "test", server: "148" };

        // const params = new URLSearchParams();
        // params.append('param1', 'value1');
        // params.append('param2', 'value2');

        // var bodyFormData = new FormData();
        // var split = ":::"

        // var searchContent = typeTrace+":"+request
        // if(isDate){
        //     searchContent += ":"+moment(dayPickS).format("YYYY-MM-DD")
        // }
        // searchContent+= split+changeS+split+envS+split+serverS+split+"end"

        // console.log(searchContent)
        // //bodyFormData.append('command', request + ":::false" + ":::test" + ":::148:::end");
        // bodyFormData.append('command', searchContent);

        var bodyFormData = JSON.stringify({"command":request,"absolutely":envS});
        
        const config = {
            method: 'post',
            url: 'http://127.0.0.1:5000/search',
            headers: {
                'Content-Type': 'application/json'
            },
            data: bodyFormData
        };

        console.log(bodyFormData.values);

        if(isDate && dayPickS===""){
            setSearchResult()
            return;
        }
        if(request!==""){
            console.log(bodyFormData)
             axios(config)
                 .then(function (response) {
                     // console.log(JSON.stringify(response.data));
                     setSearchResult(response.data)
                 })
                 .catch(function (error) {
                     console.log(error);
                 });
        }else{
            setSearchResult("Log is empty")
        }

    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log(e.target.value)
            setSearchValue(e.target.value)
            traceLog(e.target.value)
        }
    }
    const handleChangeEnv = (e) => {
        setIsProd(!isProd)
        if(!isProd) {
            setEnvS("prod")
        }else
            setEnvS("test")
        console.log(e.target.checked)
    }
    const handleChangeDateCheckbox = (e) => {
        setIsDate(!isDate)
        if(!isDate){
            setTypeTrace("zcat")
        }else{
            setTypeTrace("cat")
            setDatePick("")
        }
        console.log(e.target.checked)
    }
    const setDatePick= (date)=>{
        setDayPickS(date)
        console.log(moment(date).format("YYYY-MM-DD"))
    }

    const terminal = useRef(null)

    return (
        <div>
            <div class="form-service">
                <div class="">
                    <div class="d-flex justify-content-center h-100">
                        <div class="searchbar">
                          {/*  <div class="search_icon">
                                <Search color="#1574b3" size={24} />
    </div>*/}
                            <input type="button" class="favorite styled" value="Search"></input>
                            <input class="search_input" type="text" placeholder="Nhập thông tin muốn tìm kiếm ..." onKeyDown={handleKeyDown} />
                            
                        </div>
                    </div>

                    <div class="dashboard">
                        <div class="pretty p-switch p-fill">
                            <input type="checkbox" defaultChecked={isProd} defaultValue={isProd} onChange={handleChangeEnv} />
                            <div class="state">
                                <label>Tìm kiếm với độ chính xác cao</label>
                            </div>
                        </div>
                        {/* <div class="pretty p-switch p-fill">
                            <input type="checkbox" defaultChecked={isDate} defaultValue={isDate} onChange={handleChangeDateCheckbox} />
                            <div class="state">
                                <label>Date {(isDate && dayPickS==="")?<span className="text-danger"> (Mời chọn ngày)</span>:""} : </label>
                            </div>
                        </div>
                            <DatePicker selected={dayPickS} onChange={date => setDatePick(date)} disabled={!isDate}/> */}
                            
                    </div>
                </div>
            </div>
            <div class="form-screen">
                <Title />
                <div class="p-3">
                    <form ref={terminal}>
                        <span class="p-3 pb-3" for="logTerminal"> Các câu trả lời được tìm thấy:
                        </span>
                        <textarea class="form-control rounded-0 terminal" id="logTerminal" rows="25" contentEditable="false" value={searchResult} spellcheck="false">

                        </textarea>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default ScreenForm;