import axios from "axios";




const GetUserData = () => {



    const GetCustomerByEmail = async () => {



        const email = localStorage.getItem("session-detail")
        const { Email } = JSON.parse(email);
        const result = await axios.get(`http://localhost:1234/customer/getCustomerByEmail/${Email}`);
        localStorage.setItem("CustomerId", result.data.customerId);

    }

    const GetAdminByEmail = async () => {
        const obj = localStorage.getItem("session-detail")
        const { Email } = JSON.parse(obj);
        const result = await axios.get(`http://localhost:1234/admin/getAdminByEmail/${Email}`)
        localStorage.setItem("AdminId", result.data.adminId);
    }

    var something = (function () {
        var executed = false;
        return function () {
            if (!executed) {
                executed = true;
            }
        }
    })();

    const user = localStorage.getItem("session-detail")
    const { userType } = JSON.parse(user);

    if (userType === 'Admin') {
        GetAdminByEmail();
    }
    else if (userType === 'Customer') {
        GetCustomerByEmail();
    }

}





export default GetUserData;
