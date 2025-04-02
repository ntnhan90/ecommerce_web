import {
    Dropdown
} from 'react-bootstrap';
import Link from 'next/link';

const AccountInfo = () =>{
    return (
        <div className="notif-scroll scrollbar-outer">
			<div className="notif-center">
				<Link href="#">
                    <div className="notif-icon notif-primary">
                        <i className="fa fa-user-plus"></i>
                    </div>
                    <div className="notif-content">
                        <span className="block"> New user registered </span>
                        <span className="time">5 minutes ago</span>
                    </div>
				</Link>
				<Link href="#">
                    <div className="notif-icon notif-success">
                        <i className="fa fa-comment"></i>
                    </div>
                    <div className="notif-content">
                        <span className="block">
                                Rahmad commented on Admin
                        </span>
                        <span className="time">12 minutes ago</span>
                    </div>
				</Link>
				<Link href="#">
                    <div className="notif-img">
                        <img src="/img/profile2.jpg" alt="Img Profile"  />
                    </div>
                    <div className="notif-content">
                        <span className="block">
                            Reza send messages to you
                        </span>
                        <span className="time">12 minutes ago</span>
                    </div>
				</Link>
				<Link href="#">
                    <div className="notif-icon notif-danger">
                        <i className="fa fa-heart"></i>
                    </div>
                    <div className="notif-content">
                        <span className="block"> Farrah liked Admin </span>
                        <span className="time">17 minutes ago</span>
                    </div>
				</Link>
			</div>
		</div>
    )
}
  

const Account = (props: any) =>{
    return(
        <Dropdown as="li" className="nav-item topbar-user dropdown hidden-caret">
			<Dropdown.Toggle as="a" className='profile-pic' >
                <div className="avatar-sm">
                    <img  src="/img/profile.jpg"  alt="..."
                        className="avatar-img rounded-circle"
                    />
                </div>
                <span className="profile-username">
                    <span className="op-7">Hi,</span>
                    <span className="fw-bold">Hizrian</span>
                </span>
			</Dropdown.Toggle>

			<Dropdown.Menu as="ul" className='notif-box animated fadeIn' >
                <div className="dropdown-user-scroll scrollbar-outer">
                    <li>
                        <div className="user-box">
                            <div className="avatar-lg">
                                <img  src="/img/profile.jpg"  alt="image profile"  className="avatar-img rounded"  />
                            </div>
                            <div className="u-text">
                                <h4>Hizrian</h4>
                                <p className="text-muted">hello@example.com</p>
                                <Link  href="#" className="btn btn-xs btn-secondary btn-sm" >View Profile</Link>
                          </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">My Profile</Link>
                        <Link className="dropdown-item" href="#">Inbox</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">Account Setting</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">Logout</Link>
                     </li>
                </div>
			</Dropdown.Menu>
		</Dropdown>

    )
}


export default Account;