
import CBreadcrumb from "@/ui/client/breadcrumb/CBreadcrumb"
import ContactForm from "@/components/page/contact/Form/ContactForm"

export default async function Contact (){
  
    return(
        <>
            <CBreadcrumb />
            <div className="container-fluid bg-light overflow-hidden px-lg-0 margin-6rem" >
                <div className="container contact px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 ps-lg-0">
                                <div className="section-title text-start">
                                    <h1 className="display-5 mb-4">Contact Us</h1>
                                </div>
                                <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-6 pe-lg-0 max-width-400">
                            <div className="position-relative h-100">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}