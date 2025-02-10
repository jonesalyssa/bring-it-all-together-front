import { useState } from "react";
import { useRegisterMutation } from "./RegisterSlice";
// import { useNavigate } from "react-router-dom";


export default function Register(setToken) {
    const [form, setForm] = useState({ firstname:"", lastname:"", email: "", password: "" });
    // const navigate = useNavigate();
    const [registerUser] = useRegisterMutation();

    const change = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const submit = async (e) => {
        e.preventDefault();
        try{
            const response = await registerUser(form).unwrap();
            setToken(response.token);
            // navigate("/");
        }catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <form onSubmit={submit}>
    <div className="form-group">
    <label>First Name</label>
    <input type="text" className="form-control" id="exampleInputFirstName" value={form.firstname} name ="firstname" onChange={change}  />
  </div>
  <div className="form-group">
    <label>Last Name</label>
    <input type="text" className="form-control" id="exampleInputLastName" value={form.lastname} name ="lastname" onChange={change} />
  </div>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={form.email} name ="email" onChange={change}/>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={form.password}
            name="password"
            onChange={change}/>
  </div>
  <button type="submit" className="btn btn-primary">Register</button>
</form>
        </div>
    )
}