import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Header } from "../(components)/header";
import { StyledWrapper, StyledTextWrap, StyledImageWrap, StyledButton } from "../styledComponents";
import "./mailchimp.css";

export default function Newsletter() {
    return (
        <>
            <Header activeSegment={"/newsletter"} />
            <StyledWrapper>
                <StyledTextWrap>
                    <div id="mc_embed_signup">
                        <form
                            action="https://aldercrest.us19.list-manage.com/subscribe/post?u=e93bae13d463fa569561b57b5&id=8606bc4f89&f_id=00ce58e7f0"
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="validate"
                            target="_blank"
                        >
                            <div id="mc_embed_signup_scroll">
                                <h2>Subscribe</h2>
                                <div className="indicates-required">
                                    <span className="asterisk">*</span> indicates required
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-EMAIL">
                                        Email Address <span className="asterisk">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="EMAIL"
                                        className="required email"
                                        id="mce-EMAIL"
                                        required
                                    />
                                </div>
                                <div id="mce-responses" className="clear foot">
                                    <div
                                        className="response"
                                        id="mce-error-response"
                                        style={{ display: "none" }}
                                    ></div>
                                    <div
                                        className="response"
                                        id="mce-success-response"
                                        style={{ display: "none" }}
                                    ></div>
                                </div>
                                <div
                                    aria-hidden="true"
                                    style={{ position: "absolute", left: "-5000px" }}
                                >
                                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                                    <input
                                        type="text"
                                        name="b_e93bae13d463fa569561b57b5_8606bc4f89"
                                        tabIndex={-1}
                                        value=""
                                    />
                                </div>
                                <div className="optionalParent">
                                    <div className="clear foot">
                                        <input
                                            type="submit"
                                            name="subscribe"
                                            id="mc-embedded-subscribe"
                                            className="button"
                                            value="Subscribe"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Mailchimp validation script */}
                    <Script
                        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
                        strategy="lazyOnload"
                    />
                    <Script id="mcjs-validation" strategy="lazyOnload">
                        {`
                            (function($) {
                                window.fnames = new Array();
                                window.ftypes = new Array();
                                fnames[0]='EMAIL';
                                ftypes[0]='email';
                                fnames[1]='FNAME';
                                ftypes[1]='text';
                                fnames[2]='LNAME';
                                ftypes[2]='text';
                                fnames[3]='ADDRESS';
                                ftypes[3]='address';
                                fnames[4]='PHONE';
                                ftypes[4]='phone';
                                fnames[5]='BIRTHDAY';
                                ftypes[5]='birthday';
                                fnames[6]='COMPANY';
                                ftypes[6]='text';
                            }(jQuery));
                            var $mcj = jQuery.noConflict(true);
                        `}
                    </Script>
                </StyledTextWrap>
                <StyledImageWrap>
                    <Image
                        src="/images/home.jpg"
                        alt="Aldercrest Logo - Massage"
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                        priority
                    />
                </StyledImageWrap>
            </StyledWrapper>
        </>
    );
}
