import { useState } from "react";
// import useNavigate from "react-router-dom";
import { useLoginMutation } from "./LoginSlice";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [form, setForm] = useState ({ email: "", password: ""});
    // const navigate = useNavigate();
    const [loginUser] = useLoginMutation();

    const change = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const submit = async (e) => {
        e.preventDefault();
        try{
            const response = await loginUser(form);
            console.log(response);
            localStorage.setItem("token", response.data.token);
            // navigate("/");
        }catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <form onSubmit={submit}>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={form.email} name ="email" onChange={change} />
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"value={form.password}
            name="password"
            onChange={change} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}