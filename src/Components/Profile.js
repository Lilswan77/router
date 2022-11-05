import { useNavigate} from "react-router-dom"

const Profile = () => {
    const navigate = useNavigate();
  return (
    <div>
        profile
          <button onClick={() => {
              navigate("/about")
        }}> Change to about page</button>  
    </div>
  )
}

export default Profile