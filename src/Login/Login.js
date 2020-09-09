import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import base from "../utils/firebase.js";
import * as firebase from "firebase/app";

import { AuthContext } from "../utils/Auth.js";
import Banner from "../components/Banner"

import { Container, Row, Col} from 'react-bootstrap';
import "./Login.css"
import nucalm from "../assets/nucalm.png"




const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await base
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/beta");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return <Redirect to="/tracks" />;
  // }

  return (
    <Container className="containerStyle">
      <Banner></Banner>
      <img src = { nucalm } alt = "NuCalm" className = "nucalm-img-login"/> 
      
      <form onSubmit={handleLogin}>
        <label style={{display: 'none'}}>
          <input name="email" type="email" placeholder="Email" value="nucalm@betatesting.com"/>
        </label>
        <label>
          <input className= "password" name="password" type="password" placeholder="Password" />
        </label>
        <div className="loginRow">
          {/* <div className = "termsAndConditions">
            <input type="checkbox" name="terms" required />
            <div>

            <span className="termsAndConditionsText">Accept <a href = "/" style={{color: "lightgray"}}> Terms & Conditions</a></span>
            <span className="termsAndConditionsSubText">By agreeing to the Terms & Conditions, you accept that any provided content may not be downloaded or distributed at this time. </span>
            </div>

          </div> */}
          <div className = "termsPane">
          <h2 style={{fontWeight: '300'}}>Terms & Conditions</h2>

          <div className = "conditions_p">
            <p> Solace Lifesciences, Inc. ("Solace Lifesciences" or "we") provides NuCalm<sup><sup>®</sup></sup> proprietary neuroacoustic software and services. These offerings are provided by Solace Lifesciences through an application you download to your mobile device (the "Application") and at this Internet site (the "Site" and, together with any related software, tools and services provided in connection with the Application or Site, the "Solace Lifesciences Service"). Please read carefully the following terms and conditions ("Terms of Service") and our Privacy Policy, which may be found on our website at <a href="https://www.expensify.com/privacy">https://www.nucalm.com/privacy</a> and which is incorporated herein by reference into these Terms of Service. These Terms of Service govern your access to and use of the Solace Lifesciences Service and all Site Content and constitute a binding legal agreement between you and Solace Lifesciences.</p><p>YOU ACKNOWLEDGE AND AGREE THAT, BY CLICKING ON THE "ACCEPT TERMS" BUTTON, YOU ARE INDICATING THAT YOU HAVE READ, UNDERSTAND AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE. IF YOU DO NOT AGREE TO THESE TERMS OF SERVICE, THEN YOU HAVE NO RIGHT TO ACCESS OR USE THE SOLACE LIFESCIENCES SERVICE OR SITE CONTENT. If you accept or agree to these Terms of Service on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that company or other legal entity to these Terms of Service and, in such event, "you" and "your" will refer and apply to that company or other legal entity.</p><h2><a id="_52srhv1q1sw2"></a><strong>Definitions</strong></h2><ul><li>"Content" means text, graphics, photos, music, software, audio, video, information or other materials.</li><li>"Corporate Member" means a Member that is a company or other legal entity, rather than an individual.</li><li>"Solace Lifesciences Content" means Content that Solace Lifesciences makes available through the Site or Solace Lifesciences Service, including any Content licensed to Solace Lifesciences from a third party, but excluding Member Content.</li><li>"Member" means a person or entity who completes Solace Lifesciences' account registration process, as described under "Account Registration" below.</li><li>"Member Content" means Content that a Member posts, uploads, publishes, submits or transmits to be made available through the Solace Lifesciences Service, including, without limitation, comments to the Solace Lifesciences blog.</li><li>"Site Content" means Solace Lifesciences Content and Member Content.<a id="_l4idg2qdi36r"></a><a id="_3ifbrjn84ow0"></a></li></ul><h2><a id="_geq5en8avixy"></a><strong>Modification</strong></h2><p>Solace Lifesciences reserves the right, at its sole discretion, to modify, discontinue or terminate the Solace Lifesciences Service or to modify these Terms of Service, at any time and without prior notice. If we modify these Terms of Service, we will post the modification on the Site or provide you with notice of the modification. We will also update the "Last Updated Date" at the top of these Terms of Service or on the Site or Application. By continuing to access or use the Solace Lifesciences Service after we have posted a modification on the Site or have provided you with notice of a modification, you are indicating that you agree to be bound by the modified Terms of Service. If the modified Terms of Service are not acceptable to you, your only recourse is to cease using the Solace Lifesciences Service.</p><p>Certain portions of the Solace Lifesciences Service may, or may in the future, have different terms and conditions posted on the Site or may require you to agree with and accept additional terms and conditions. Solace Lifesciences may, in its sole discretion, make premium or different applications, software or services available to you that is subject to different terms and conditions and narrower licenses than as set forth therein. If there is a conflict between these Terms of Service and terms and conditions posted for a specific portion of the Solace Lifesciences Service, the latter terms and conditions shall take precedence with respect to your use of or access to that portion of the Solace Lifesciences Service.</p><h2><a id="_op7k17kbkrb3"></a><strong>Eligibility</strong></h2><p>By accessing or using the Solace Lifesciences Service you represent and warrant to Solace Lifesciences that: (i) you are of legal age to form a binding contract, or, if you are a minor, you have your parent's permission to use the Solace Lifesciences Service, and your parent has read and agrees to these Terms of Service on your behalf; (ii) if you are accepting these Terms of Service on behalf of a company or other legal entity, you have the authority to bind that company or legal entity to these Terms of Service. You also certify that you are legally permitted to use and access the Solace Lifesciences Service and take full responsibility for the selection and use of and access to the Solace Lifesciences Service. These Terms of Service are void where prohibited by law, and the right to access the Solace Lifesciences Service is revoked in such jurisdictions.</p><h2><a id="_g8oubn73xszz"></a><strong>Privacy</strong></h2><p>See Solace Lifesciences' Privacy Policy at https://www.nucalm.com/privacy for information and notices concerning Solace Lifesciences' collection and use of your personal information.</p><h2><a id="_8w89n9ylv6sz"></a><a id="_op31ngy5ice3"></a><a id="_qu57bt5cbux1"></a><a id="_oburmvw1o1e3"></a><a id="_2ht0bx937ekx"></a><strong>Intellectual Property</strong></h2><p>Solace Lifesciences Service. Solace Lifesciences shall own and retain all right, title, and interest in and to the Solace Lifesciences Service (except for any licensed content and software components included therein). Member agrees not to reverse engineer, decompile, distribute, license, sell, transfer, disassemble, copy, alter, modify, or create derivative works of the Solace Lifesciences Service or otherwise use the Solace Lifesciences Service in any way that violates the use restrictions contained in these Terms of Service. Solace Lifesciences does not grant to Member any license, express or implied, to the intellectual property of Solace Lifesciences or its licensors. Member further acknowledges and agrees that any information regarding the design, "look and feel", specifications, components, functionality or operation and payment terms and pricing (if applicable) of the Solace Lifesciences Service is considered the confidential and proprietary information of Solace Lifesciences (collectively "Solace Lifesciences Confidential Information").</p><p>Solace Lifesciences Logos and Designs. Solace Lifesciences' graphics, logos, designs, page headers, button icons, scripts and service names are registered trademarks, trademarks or trade dress of Solace Lifesciences in the U.S. and/or other countries. Solace Lifesciences' trademarks and trade dress may not be used, including as part of trademarks and/or as part of domain names, in connection with any product or service in any manner that is likely to cause confusion and may not be copied, imitated, or used, in whole or in part, without Solace Lifesciences' prior written permission.</p><h2><a id="_yqit88ee7mr3"></a><strong>Feedback</strong></h2><p>We welcome and encourage you to provide feedback, comments and suggestions for improvements to the Solace Lifesciences Service ("Feedback"). You may submit Feedback by emailing us at support@nucalm.com or through the "Help" section of the Solace Lifesciences Service. You acknowledge and agree that all Feedback will be the sole and exclusive property of Solace Lifesciences and you hereby irrevocably assign to Solace Lifesciences and agree to irrevocably assign to Solace Lifesciences all of your right, title, and interest in and to all Feedback, including without limitation all worldwide patent rights, copyright rights, trade secret rights, and other proprietary or intellectual property rights therein. At Solace Lifesciences' request and expense, you will execute documents and take such further acts as Solace Lifesciences may reasonably request to assist Solace Lifesciences to acquire, perfect, and maintain its intellectual property rights and other legal protections for the Feedback.<a id="_7x6gfqpcnrq0"></a></p><h2><a id="_n3e76gvb60yk"></a><strong>Confidentiality</strong></h2><p>You acknowledge that Confidential Information (as defined below) is a valuable, special and unique asset of Solace Lifesciences and agree that you will not disclose, transfer, use (or seek to induce others to disclose, transfer or use) any Confidential Information for any purpose other than disclosure to your authorized employees and agents who are bound to maintain the confidentiality of Confidential Information. You shall promptly notify Solace Lifesciences in writing of any circumstances which may constitute unauthorized disclosure, transfer, or use of Confidential Information. You shall use best efforts to protect Confidential Information from unauthorized disclosure, transfer or use. You shall return all originals and any copies of any and all materials containing Confidential Information to Company upon termination of this Agreement for any reason whatsoever. The term "Confidential Information" shall mean any and all of Company's trade secrets, confidential and proprietary information and all other information and data of Company that is not generally known to the public or other third parties who could derive value, economic or otherwise, from its use or disclosure. Confidential Information shall be deemed to include technical, financial, strategic and other proprietary and confidential information relating to Company's business, operations and properties, including information about Company's Users or partners, or other business information disclosed directly or indirectly in writing, orally or by drawings or observation.</p><h2><a id="_4chb094040u2"></a><strong>General Prohibitions</strong></h2><p>You agree not to do any of the following:</p><ul><li>Post, upload, publish, submit or transmit any Content that: (i) infringes, misappropriates or violates a third party's patent, copyright, trademark, trade secret, moral rights or other intellectual property rights, or rights of publicity or privacy; (ii) violates, or encourages any conduct that would violate, any applicable law or regulation or would give rise to civil liability; (iii) is fraudulent, false, misleading or deceptive; (iv) is defamatory, obscene, pornographic, vulgar or offensive; (v) promotes discrimination, bigotry, racism, hatred, harassment or harm against any individual or group; (vi) is violent or threatening or promotes violence or actions that are threatening to any person or entity; or (vii) promotes illegal or harmful activities or substances.</li><li>Use, display, mirror or frame the Solace Lifesciences Service, or any individual element within the Solace Lifesciences Service, Solace Lifesciences' name, any Solace Lifesciences trademark, logo or other proprietary information, or the layout and design of any page or form contained on a page, without Solace Lifesciences' express written consent;</li><li>Access, tamper with, or use non-public areas of the Solace Lifesciences Service, Solace Lifesciences' computer systems, or the technical delivery systems of Solace Lifesciences' providers;</li><li>Attempt to probe, scan, or test the vulnerability of any Solace Lifesciences system or network or breach any security or authentication measures;</li><li>Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as of privacy and publicity) of any other use of the Solace Lifesciences Service or staff member of Solace Lifesciences.</li><li>Avoid, bypass, remove, deactivate, impair, descramble or otherwise circumvent any technological measure implemented by Solace Lifesciences or any of Solace Lifesciences' providers or any other third party (including another user) to protect the Solace Lifesciences Service or Site Content;</li><li>Attempt to access or search the Solace Lifesciences Service or Site Content or download Site Content from the Solace Lifesciences Service through the use of any engine, software, tool, agent, device or mechanism (including spiders, robots, crawlers, data mining tools or the like) other than the software and/or search agents provided by Solace Lifesciences or other generally available third party web browsers;</li><li>Send any unsolicited or unauthorized advertising, promotional materials, email, junk mail or junk messages, spam, chain letters or other form of solicitation (including sending invitations to use the Solace Lifesciences Service to the mobile numbers of people you do not know);</li><li>Use or disclose any Solace Lifesciences Confidential Information, except as otherwise explicitly set forth herein.</li><li>Use any meta tags or other hidden text or metadata utilizing a Solace Lifesciences trademark, logo URL or product name without Solace Lifesciences' express written consent;</li><li>Use the Solace Lifesciences Service or Site Content for any commercial purpose or the benefit of any third party or in any manner not permitted by these Terms of Service;</li><li>Forge any TCP/IP packet header or any part of the header information in any email or newsgroup posting, or in any way use the Solace Lifesciences Service or Site Content to send altered, deceptive or false source-identifying information;</li><li>Attempt to decipher, decompile, disassemble or reverse engineer any of the software used to provide the Solace Lifesciences Service or Site Content;</li><li>Interfere with, or attempt to interfere with, the access of any user, host or network, including, without limitation, sending a virus, overloading, flooding, spamming, or mail-bombing the Solace Lifesciences Service;</li><li>Impersonate or misrepresent your affiliation with any person or entity;</li><li>Violate any applicable law or regulation; or</li><li>Encourage or enable any other individual or entity to do any of the foregoing.</li></ul><p>Solace Lifesciences will have the right to investigate and prosecute violations of any of the above to the fullest extent of the law. Solace Lifesciences may involve and cooperate with law enforcement authorities in prosecuting users who violate these Terms of Service. You acknowledge that Solace Lifesciences has no obligation to monitor your access to or use of the Solace Lifesciences Service, or to review or edit any Member Content, but has the right to do so for the purpose of operating the Solace Lifesciences Service, to ensure your compliance with these Terms of Service, or to comply with applicable law or the order or requirement of a court, administrative agency or other governmental body.</p><h2><a id="_quphciz9g4nv"></a><strong>Links to Third-Party Websites</strong></h2><p>The Solace Lifesciences Service may now or in the future contain links to third-party websites, advertisers, services, or resources that are not owned or controlled by Solace Lifesciences. You acknowledge and agree that Solace Lifesciences has no control over and is not responsible or liable for: (i) the availability or accuracy of such websites or resources; or (ii) the content, products, privacy policies, practices, or services on or available from such websites or resources. Links to such websites or resources do not imply any endorsement by Solace Lifesciences of such websites or resources or the content, products, practices, privacy policies, or services available from such websites or resources. You acknowledge sole responsibility for and assume all risk arising from your use of any such websites or resources or the Content, products, or services on or available from such websites or resources. Additionally, your dealings with or participation in promotions of any third parties, including payment and delivery of goods, and any other terms (such as warranties) are solely between you and such third parties. You agree that Solace Lifesciences shall not be responsible for any loss or damage of any sort relating to your dealings with such third parties. We encourage you to be aware of when you leave the Solace Lifesciences Service, and to read the terms and conditions and privacy policy of any third-party website or service that you visit. You expressly relieve Solace Lifesciences from any and all liability arising from your use of any third-party website or services or third-party content.</p><h2><a id="_h0rmxdwifh4e"></a><a id="_pefiigs2gbpb"></a><a id="_yexleu2cbtsq"></a><strong>Disclaimers</strong></h2><p>THE SOLACE LIFESCIENCES SERVICE AND SITE CONTENT ARE PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED. WITHOUT LIMITING THE FOREGOING, SOLACE LIFESCIENCES EXPLICITLY DISCLAIMS ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. SOLACE LIFESCIENCES MAKES NO WARRANTY THAT THE SOLACE LIFESCIENCES SERVICE OR SITE CONTENT WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS.SOLACE LIFESCIENCES MAKES NO WARRANTY REGARDING THE QUALITY OF ANY PRODUCTS, SOLACE LIFESCIENCES SERVICE OR SITE CONTENT PURCHASED OR OBTAINED THROUGH THE SOLACE LIFESCIENCES SERVICE OR THE ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS OR RELIABILITY OF ANY CONTENT OBTAINED THROUGH THE SOLACE LIFESCIENCES SERVICE. SOLACE LIFESCIENCES DOES NOT WARRANT THE RESULTS OF USE OF THE SOLACE LIFESCIENCES SERVICE, AND CLIENT ASSUMES ALL RISK AND RESPONSIBILITY WITH RESPECT THERETO. CLIENT SHOULD NOTE THAT IN USING THE SOLACE LIFESCIENCES SERVICE, SENSITIVE INFORMATION WILL TRAVEL THROUGH THIRD PARTY INFRASTRUCTURES WHICH ARE NOT UNDER SOLACE LIFESCIENCES' CONTROL (SUCH AS A THIRD-PARTY SERVERS AND THE INTERNET). SOLACE LIFESCIENCES MAKES NO WARRANTY WITH RESPECT TO THE SECURITY OF SUCH THIRD-PARTY INFRASTRUCTURES.</p><p>NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM SOLACE LIFESCIENCES OR THROUGH THE SOLACE LIFESCIENCES SERVICE, WILL CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN.</p><p>YOU ARE SOLELY RESPONSIBLE FOR ALL OF YOUR COMMUNICATIONS AND INTERACTIONS WITH OTHER USERS OF THE SOLACE LIFESCIENCES SERVICE AND WITH OTHER PERSONS WITH WHOM YOU COMMUNICATE OR INTERACT AS A RESULT OF YOUR USE OF THE SOLACE LIFESCIENCES SERVICE. YOU UNDERSTAND THAT SOLACE LIFESCIENCES DOES NOT SCREEN OR INQUIRE INTO THE BACKGROUND OF ANY USERS OF THE SOLACE LIFESCIENCES SERVICE, NOR DOES SOLACE LIFESCIENCES MAKE ANY ATTEMPT TO VERIFY THE STATEMENTS OF USERS OF THE SOLACE LIFESCIENCES SERVICE. SOLACE LIFESCIENCES MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE CONDUCT OF USERS OF THE SOLACE LIFESCIENCES SERVICE OR THEIR COMPATIBILITY WITH ANY CURRENT OR FUTURE USERS OF THE SOLACE LIFESCIENCES SERVICE. YOU AGREE TO TAKE REASONABLE PRECAUTIONS IN ALL COMMUNICATIONS AND INTERACTIONS WITH OTHER USERS OF THE SOLACE LIFESCIENCES SERVICE AND WITH OTHER PERSONS WITH WHOM YOU COMMUNICATE OR INTERACT AS A RESULT OF YOUR USE OF THE SOLACE LIFESCIENCES SERVICE, PARTICULARLY IF YOU DECIDE TO MEET OFFLINE OR IN PERSON.</p><h2><a id="_medrln7tr5tr"></a><strong>Indemnity</strong></h2><p>You agree to defend, indemnify, and hold Solace Lifesciences, its officers, directors, employees and agents, harmless from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the Solace Lifesciences Service, or your violation of these Terms of Service, including without limitation any breach of any representations or warranties herein, any infringement by you of Solace Lifesciences' intellectual property rights, and any claim by a third party that the Member Data or Member Art infringes such third party's intellectual property rights.</p><p>Solace Lifesciences will defend indemnify and hold you (and in the case of a Corporate Member, your directors, officers, employees and affiliates) harmless from and against any and all costs, liabilities, losses and expenses (including but not limited to reasonable attorneys' fees), resulting from any claim, suit, action or proceeding alleging that the Solace Lifesciences Service or any portion thereof infringes any patent, copyright or other intellectual property, proprietary, or other right of any third party.</p><h2><a id="_kfn7nfgbdsni"></a><strong>Limitation of Liability</strong></h2><p>YOU ACKNOWLEDGE AND AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE ENTIRE RISK ARISING OUT OF YOUR ACCESS TO AND USE OF THE SOLACE LIFESCIENCES SERVICE AND SITE CONTENT REMAINS WITH YOU. EXCEPT FOR THE INDEMNITY OBLIGATIONS SET FORTH HEREIN, UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SYSTEM FAILURE OR NETWORK OUTAGE, WILL EITHER SOLACE LIFESCIENCES OR ANY OTHER PERSON OR ENTITY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SOLACE LIFESCIENCES SERVICE OR SITE CONTENT WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA OR LOSS OF GOODWILL, SOLACE LIFESCIENCES SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE PRODUCTS OR SOLACE LIFESCIENCES SERVICE, OR FOR ANY DAMAGES FOR PERSONAL OR BODILY INJURY OR EMOTIONAL DISTRESS ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OF SOLACE LIFESCIENCES SERVICE OR FROM THE USE OF OR INABILITY TO USE THE SERVICES OR SITE CONTENT, OR FROM ANY COMMUNICATIONS, INTERACTIONS OR MEETINGS WITH OTHER USERS OF THE SOLACE LIFESCIENCES SERVICE OR OTHER PERSONS WITH WHOM YOU COMMUNICATE OR INTERACT AS A RESULT OF YOUR USE OF THE SOLACE LIFESCIENCES SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT Solace Lifesciences HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.</p><p>EXCEPT FOR THE INDEMNITY OBLIGATIONS SET FORTH HEREIN, IN NO EVENT WILL SOLACE LIFESCIENCES' AGGREGATE LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OF SOLACE LIFESCIENCES SERVICE OR FROM THE USE OF OR INABILITY TO USE THE SOLACE LIFESCIENCES SERVICE OR SITE CONTENT EXCEED THE AMOUNTS YOU HAVE PAID TO SOLACE LIFESCIENCES FOR USE OF THE SOLACE LIFESCIENCES SERVICE OR CONTENT. THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN SOLACE LIFESCIENCES AND YOU. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.</p><h2><a id="_o4c8dt68ffl9"></a><a id="_46r3vctgf63n"></a><a id="_pypn0i5yjt5k"></a><strong>Controlling Law and Jurisdiction</strong></h2><p>These Terms of Service and any action related thereto will be governed by the laws of the State of Delaware without regard to its conflict of law provisions. The exclusive jurisdiction and venue of any action with respect to the subject matter of these Terms of Service will be the state and federal courts located in the New Castle County, Wilmington Delaware and each of the parties hereto waives any objection to jurisdiction and venue in such courts.</p><h2><a id="_c5qf7hg5vscf"></a><strong>Entire Agreement</strong></h2><p>These Terms of Service constitute the entire and exclusive understanding and agreement between Solace Lifesciences and you regarding the Solace Lifesciences Service and Site Content, and these Terms of Service supersede and replace any and all prior oral or written understandings or agreements between Solace Lifesciences and you regarding the Solace Lifesciences Service.</p><h2><a id="_c8xeqlfyow5u"></a><strong>Assignment</strong></h2><p>You may not assign or transfer these Terms of Service, by operation of law or otherwise, without Solace Lifesciences' prior written consent. Any attempt by you to assign or transfer these Terms of Service, without such consent, will be null and of no effect. Solace Lifesciences may assign or transfer these Terms of Service, at its sole discretion, without restriction. Subject to the foregoing, these Terms of Service will bind and inure to the benefit of the parties, their successors and permitted assigns.</p><h2><a id="_3ut2ta3iy1sr"></a><strong>Notices</strong></h2><p>Any notices or other communications permitted or required hereunder, including those regarding modifications to these Terms of Service, will be in writing and given: by Solace Lifesciences (i) via email (in each case to the address that you provide) or (ii) by posting to the Application or Site. For notices made by email, the date of receipt will be deemed the date on which such notice is transmitted.</p><h2><a id="_a4g5uraadtug"></a><strong>General</strong></h2><p>The failure of Solace Lifesciences to enforce any right or provision of these Terms of Service will not constitute a waiver of future enforcement of that right or provision. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of Solace Lifesciences. Except as expressly set forth in these Terms of Service, the exercise by either party of any of its remedies under these Terms of Service will be without prejudice to its other remedies under these Terms of Service or otherwise. If for any reason a court of competent jurisdiction finds any provision of these Terms of Service invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the other provisions of these Terms of Service will remain in full force and effect.</p><h2><a id="_iv18pfl3jvc8"></a><strong>Contacting Solace Lifesciences</strong></h2><p>If you have any questions about these Terms of Service, please contact Solace Lifesciences at support@nucalm.com or 501 Silverside Road #7, Wilmington, DE 19809. You acknowledge and agree that when contacting Solace Lifesciences, whether by email, chat, or otherwise, you will not include any personally identifiable information in your communications, and that if such information is included in your communications with Solace Lifesciences, Solace Lifesciences will have no legal obligation or liability with regard to such information.</p>
          </div>

          <label className = "checkbox">
            <input type="checkbox" name="terms" required />
            <span>Accept Terms & Conditions</span>
          </label>
          
       
          <p className = "termsConditionsSubText">By agreeing to the Terms & Conditions, you accept that any provided content may not be downloaded or distributed at this time. </p>

          </div>
          <div className = "loginButtonDiv"> 
              <button className="loginButton-login" type="submit">
                <p className = "loginText-login">ACCESS</p>
              </button>
          </div>
        </div>


      </form>
    </Container>   
  );
};

export default withRouter(Login);