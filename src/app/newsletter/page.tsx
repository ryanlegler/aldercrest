import Image from "next/image";
import { Header } from "../(components)/header";
import { StyledWrapper, StyledTextWrap, StyledImageWrap } from "../styledComponents";
import "./mailchimp.css";

export default function Newsletter() {
    return (
        <>
            <Header activeSegment={"/newsletter"} />
            <StyledWrapper>
                <StyledTextWrap>
                    <div id="mc_embed_shell">
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

                                    {/* Email Field */}
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

                                    {/* Name Fields */}
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-FNAME">First Name</label>
                                        <input
                                            type="text"
                                            name="FNAME"
                                            className="text"
                                            id="mce-FNAME"
                                        />
                                    </div>
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-LNAME">Last Name</label>
                                        <input
                                            type="text"
                                            name="LNAME"
                                            className="text"
                                            id="mce-LNAME"
                                        />
                                    </div>

                                    {/* Address Fields */}
                                    <div className="mc-address-group">
                                        <div className="mc-field-group">
                                            <label htmlFor="mce-ADDRESS-addr1">Address</label>
                                            <input
                                                type="text"
                                                maxLength={70}
                                                name="ADDRESS[addr1]"
                                                id="mce-ADDRESS-addr1"
                                                className=""
                                            />
                                        </div>
                                        <div className="mc-field-group">
                                            <label htmlFor="mce-ADDRESS-addr2">
                                                Address Line 2
                                            </label>
                                            <input
                                                type="text"
                                                maxLength={70}
                                                name="ADDRESS[addr2]"
                                                id="mce-ADDRESS-addr2"
                                            />
                                        </div>
                                        <div className="mc-address-fields-group">
                                            <div className="mc-field-group">
                                                <label htmlFor="mce-ADDRESS-city">City</label>
                                                <input
                                                    type="text"
                                                    maxLength={40}
                                                    name="ADDRESS[city]"
                                                    id="mce-ADDRESS-city"
                                                    className=""
                                                />
                                            </div>
                                            <div className="mc-field-group">
                                                <label htmlFor="mce-ADDRESS-state">
                                                    State/Province/Region
                                                </label>
                                                <input
                                                    type="text"
                                                    maxLength={20}
                                                    name="ADDRESS[state]"
                                                    id="mce-ADDRESS-state"
                                                    className=""
                                                />
                                            </div>
                                            <div className="mc-field-group">
                                                <label htmlFor="mce-ADDRESS-zip">
                                                    Postal / Zip Code
                                                </label>
                                                <input
                                                    type="text"
                                                    maxLength={10}
                                                    name="ADDRESS[zip]"
                                                    id="mce-ADDRESS-zip"
                                                    className=""
                                                />
                                            </div>
                                        </div>
                                        <div className="mc-field-group">
                                            <label htmlFor="mce-ADDRESS-country">Country</label>
                                            <select
                                                name="ADDRESS[country]"
                                                id="mce-ADDRESS-country"
                                                className=""
                                            >
                                                <option value="USA" selected>
                                                    USA
                                                </option>
                                                {/* Note: Removed other countries for brevity, add them back if needed */}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Phone Field */}
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-PHONE">Phone Number</label>
                                        <input
                                            type="text"
                                            name="PHONE"
                                            className="REQ_CSS"
                                            id="mce-PHONE"
                                        />
                                    </div>

                                    {/* Response Messages */}
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

                                    {/* Bot Prevention */}
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

                                    {/* Submit Button */}
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
                    </div>
                </StyledTextWrap>
                <StyledImageWrap>
                    <Image
                        src="/images/newsletter.png"
                        alt="Aldercrest Logo - Newsletter"
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
