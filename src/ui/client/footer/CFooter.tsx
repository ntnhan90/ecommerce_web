import Link from "next/link";
import { Container } from "react-bootstrap";


export default function CFooter(){
    return(
        <div className="footer">
            <div className="container">
                <div className="col-md-4 col-sm-4 padding-top-10">
                    2015 © Keenthemes. ALL Rights Reserved. 
                </div>
                <div className="col-md-4 col-sm-4">
                <ul className="list-unstyled list-inline pull-right">
                    {/*
                              <li><img src="assets/corporate/img/payments/western-union.jpg" alt="We accept Western Union" title="We accept Western Union"></li>
                    <li><img src="assets/corporate/img/payments/american-express.jpg" alt="We accept American Express" title="We accept American Express"></li>
                    <li><img src="assets/corporate/img/payments/MasterCard.jpg" alt="We accept MasterCard" title="We accept MasterCard"></li>
                    <li><img src="assets/corporate/img/payments/PayPal.jpg" alt="We accept PayPal" title="We accept PayPal"></li>
                    <li><img src="assets/corporate/img/payments/visa.jpg" alt="We accept Visa" title="We accept Visa"></li>
                    */}
                    
              
                    </ul>
                </div>
                <div className="col-md-4 col-sm-4 text-right">
                    <p className="powered">Powered by: <Link href="http://www.keenthemes.com/">KeenThemes.com</Link></p>
                </div>
            </div>
        </div>
     
    )
}