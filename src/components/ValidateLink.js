import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";


const Validate = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const token = searchParams.get('token');
    alert(token);

    axios.post('http://52.142.30.237:9002/validateLink', {
        token
              })
              .then(function (response) {
                console.log(response);
                alert(response.data);
              })
              .catch(function (error) {
                console.log(error);
              });

    return (<div>
        </div>
    );
}

export default Validate;