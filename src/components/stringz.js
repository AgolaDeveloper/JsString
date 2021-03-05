import React from 'react'
import './stringz.css'
function Stringz(){
    return(
        <div className="stri">
            <h2>BASIC STRINGS METHODS</h2>
            <dl>
                <dt>.length</dt>
                    <dd>gives the length of a string</dd>
                <dt>split()</dt>
                    <dd>this method splits a string into an array</dd>
                <dt>replace(toReplace, toBeReplaced)</dt>
                    <dd>the method replaces some word within a string with a new word</dd>
                <dt>toLowerCase()</dt>
                    <dd>the function turns a string into lowercase</dd>
                <dt>toUpperCase()</dt>
                    <dd>the function turns a given string into uppercase</dd>
                <dt>IndexOf(str)</dt>
                    <dd>it gives the location(index) of a string's first case</dd>
                <dt>LastIndexOf(str)</dt>
                    <dd>it gives the location(index) of a string's last case</dd>
                <dt>cancat(strToJoin)</dt>
                    <dd>the method is tasked with joining different strings</dd>
                
            </dl>
        </div>
    )
}

export default Stringz;