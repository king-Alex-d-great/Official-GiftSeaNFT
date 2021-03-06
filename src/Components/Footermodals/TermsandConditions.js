import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
// import logo from '../img/Group 77.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './footer.css';

const TermsandContions = () => {
    //     const [lgShow, setLgShow] = useState(false);
    //     const handleClose = () => setLgShow(false);
    //   const handleShow = () => setLgShow(true);
    return (
        <div>
            <p>
                These terms and conditions (the <span style={{ fontWeight: 'bold' }}>Terms and Conditions</span> or the <span style={{ fontWeight: 'bold' }}>Agreement</span>) set out the terms of the agreement between you as a member of GiftseaNFT and a user of the Platform (<span style={{ fontWeight: 'bold' }}>You</span> or a <span style={{ fontWeight: 'bold' }}>Member</span>), GiftseaNFT  Ltd (GiftseaNFT ) and, where applicable, an appointed nominee. Together GiftseaNFT  Ltd and the Nominee shall be referred to as <span style={{ fontWeight: 'bold' }}>“we”</span> and <span style={{ fontWeight: 'bold' }}>“us”</span>. The <span style={{ fontWeight: 'bold' }}>Platform</span> meaning the website operated by GIFTSEANFT under the trading name GiftseaNFT .

                <p>
                    The terms and conditions should be read in conjunction with our <span style={{ fontWeight: 'bold' }}>Terms of Website Use </span><a href='www.Giftseanft.com/terms-of-website-use'>(www.Giftseanft.com/terms-of-website-use)</a> and our <span style={{ fontWeight: 'bold' }}>Privacy Statement</span> <a href='www.Giftseanft.com/privacy-statement'>(www.Giftseanft.com/privacy-statement)</a>. Use of our Platform is conditional upon your acceptance of these terms. If you do not agree to these terms you should immediately discontinue use of our Platform.
                </p>

                <p>
                    This Agreement will become legally binding once you have successfully undertaken the registration process and we have received satisfactory money laundering verification information.
                </p>

                <p>
                    Relationship between us;
                </p>

                <p>
                    <ol >
                        <li class='list2'> This Agreement is a binding contract between you, us and the Nominee (if relevant), and it sets out your and our rights and obligations with respect to your membership of GiftseaNFT and use of the Platform. In executing this Agreement, you are indicating that you agree to adhere to, and be bound by, all of its terms.</li>
                        <li class='list2'> In addition to this Agreement, you may enter into several other agreements with us and, if inconsistent, the terms of any agreement to which you agree after this Agreement will prevail over the terms of this Agreement.</li>
                        <li class='list2'>Upon executing this Agreement, you will become a Member of GiftseaNFT. In the event that you make an investment in securities through the Platform, you will also become a client of GIFTSEANFT. GIFTSEANFT will advise you of the type of client you are for regulatory purposes. An individual will, unless we notify you otherwise, be treated as a “retail” client for the purposes of the <span style={{ fontWeight: 'bold' }}>FCA</span> (Financial Conduct Authority, <a href='www.fca.org.uk'>www.fca.org.uk</a>) Rules. You may provide self-certification in relation to registering as a Member. You must answer any questions entirely on your own and without the assistance of another individual. This means that the declarations set forward in the self-certification are truthful and genuinely apply to you. If you wish to change your client classification you should notify GiftseaNFT.
                        </li>
                        <li class='list2'> GIFTSEANFT does not provide you with any advice (investment advice, legal, taxation or any other advice) in relation to the transactions conducted through the Platform. Each Investor (meaning any Member wishing to invest in equities or securities, an Investment) confirms to each Relevant Person (<span style={{ fontWeight: 'bold' }}>Relevant Person</span> means, in the case of GIFTSEANFT, GIFTSEANFT's Directors, employees, consultants, agents or advisors) that, for the purposes of entering into any investment contemplated by these terms, he or she enters into any investment entirely on the basis of their own assessment of the risks and effect thereof.</li>
                        <li class='list2'>If you become a Member you will have the opportunity to invest in some or all of the investments available from time to time on the Platform. There may be additional terms relating to the specific investment and, where notified by us and approved by you, investments may be held through a nominee arrangement (as described in the Nominee Additional Terms).</li>
                        <li class='list2'> We are required to establish your identity before you are able to use the Platform. We will use third-party organisations to assist with this process at the point when you register on our Platform. By registering on our Platform you consent to us and our partner organisations using your personal information for the purposes of carrying out credit checks and other searches on you to establish your identity, your creditworthiness and your suitability to carry out Investments. We will keep records of any information obtained.
                        </li>
                        <li class='list2'>If we are unable to establish your identity using these third-party methods, you must provide sufficient documentation about yourself to enable us and other relevant parties to ascertain and verify your identity. This may include providing certified copies of identification documents such as your passport, driving licence and recent utility bills, and providing personal information such as your address, residency and date of birth. The information required may change from time to time and should that prove to be the case we will notify you that additional documentation is required. Until you provide that additional documentation you will be unable to proceed to use our Platform.
                        </li>
                        <li class='list2'>You authorise us to use any of your personal information which is relevant to our provision of services to you for all reasonable purposes in relation to your use of the Platform. We may retain and continue to process your personal information after the termination of this Agreement or any other agreement between you and us. Your personal information may be transferred or disclosed to and/or by third parties where necessary. This enables us to provide services to you and to discharge our obligations to third parties, including relevant stock exchanges, government agencies and regulators.
                        </li>
                        <li class='list2'>With your consent, your personal information may be used by us in order to provide you with information and marketing materials in relation to our other products and services. By entering into this Agreement you confirm your wish for your personal information to be processed for these additional purposes. If you do not wish to receive marketing information please advise us in writing.
                        </li>
                        <li class='list2'>We have a conflicts of interest policy which sets out the types of actual or potential conflicts of interest which may arise given the nature of our business and provides details of how these are managed. Further details and updates of this policy can be provided on request.
                        </li>
                        <p style={{ fontWeight: 'bold' }}>
                            Miscellaneous
                        </p>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>Termination: </span>
                            An Investor may terminate and close their account with GIFTSEANFT at any time by giving at least 7 (seven) days' written notice to GIFTSEANFT. GIFTSEANFT may in its sole discretion, at any time, immediately terminate an Investor’s account by written notice to the Investor. The Investor accepts and acknowledges that GIFTSEANFT will be entitled to retain such information about the Investor and any Investments, as necessary, in order to comply with their obligations to the relevant regulatory bodies.
                        </li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>Amendment: </span>
                            These Terms and Conditions may be varied by us from time to time. If these Terms and Conditions are varied we will notify you by posting the revised terms on the Platform and contacting you via email to inform you of the revised terms. In the event that additional terms or annexes are appended to the terms in relation to specific investment types we will post these additional terms on the Platform, but will not contact you via email to inform you.
                        </li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>Entire Agreement: </span>
                            These Terms and Conditions, together with the Terms of Website Use and the Privacy Statement constitute the entire agreement between us, and you acknowledge that you have not relied upon any representations, statements or pre-contractual statements that are not expressly set out in these terms.
                        </li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>Third-Party Rights: </span>
                            Subject to the following sentence, this Agreement does not confer any rights on any person or party (other than the parties to this agreement) pursuant to the Contracts (Rights of Third Parties) Act 1999. With the prior written consent of GIFTSEANFT given in its sole discretion, any Relevant Person, any Company and/or any of such Company's directors, employees, consultants, agents or advisers, shall be entitled to enforce all of the rights and benefits under this agreement at all times as if party to this agreement.
                        </li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>Communications and Notices: </span>
                            Any notice given by any party under or in connection with these terms shall be in writing and in English, and shall be sent by the relevant party for the attention of the contact and to the address as notified by the party, from time to time. It shall be delivered by email, or sent by pre-paid first-class post or recorded delivery, and shall be deemed received as set out below. Delivery of a notice is deemed to have taken effect provided that all other requirements in this clause have been satisfied, if delivered by email, upon sending; or if sent by pre-paid first class post, recorded delivery or special delivery to an address in the UK, at 9:00am on the second business day after posting. If deemed receipt under this Clause 16 would occur outside business hours (meaning outside 9:00am to 5:30pm Monday to Friday on a day that is not a public holiday in England and a day when the banks in the city of London are open for business) then receipt is deemed to take place at 9:00am on the day when business next starts in England. To prove service it is sufficient to prove that if delivered by email the email was sent to the correct address (being <a href="mailto:contactus@GiftseaNFT.com">contactus@GiftseaNFT.com</a> or the email address associated with your account), and if delivered by post, the envelope containing the notice or other communication was properly addressed, paid for and posted.
                        </li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>Further Assurance: </span>
                            You shall from time to time (both during the continuance of these terms and after its termination) do all such acts and execute all such documents as may be reasonably necessary in order to give effect to the provisions of these terms.
                        </li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>Costs: </span>
                            Your and our costs and expenses (including any professional, legal and accountancy expenses) of the preparation, negotiation and execution of any Investment and/or any associated documentation shall be borne by you and us respectively.
                        </li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>Survival: </span>
                            All disclaimers, indemnities and exclusions in these terms shall survive termination of these terms for any reason, as shall any other provisions of these terms that by their nature are intended to survive such termination.
                        </li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>Complaints: </span>
                            Should you have any complaints in relation to your use of the Platform, please notify us by email at contactus@GiftseaNFT.com. We will aim to acknowledge your complaint promptly, investigate the circumstances and report the results to you. If your complaint is unresolved 8 (eight) weeks from the date you first made the complaint, you may refer it directly to The Financial Ombudsmen Service (FOS). The address of FOS is Exchange Tower, London E14 9GIFTSEANFT, www.financial-ombudsman.org.uk. Certain customers, such as larger companies and trusts, may not have access to the FOS.
                        </li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>Time of Essence: </span>
                            Time shall be of the essence in relation to all matters arising under or pursuant to these terms.</li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>No Waiver: </span>
                            No failure or delay by you or us in exercising any of our rights under these terms shall be deemed to be a waiver of that right, and no waiver by you or us of a breach of any provision of these terms shall be deemed to be a waiver of any subsequent breach of the same or any other provision.
                        </li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>Severability: </span>
                            If any provision of these Terms and Conditions is held by any court or other competent authority to be invalid or unenforceable, in whole or in part, these Terms and Conditions shall continue to be valid as to its other provisions and the remainder of the affected provision.
                        </li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>No Partnership: </span>
                            These Terms and Conditions shall not be construed so as to create a partnership or joint venture between you and us. Nothing in these Terms and Conditions shall be construed so as to constitute you and us as agents of one another.
                        </li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>No Partnership: </span>
                            These Terms and Conditions shall not be construed so as to create a partnership or joint venture between you and us. Nothing in these Terms and Conditions shall be construed so as to constitute you and us as agents of one another.
                        </li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>Assignment: </span>
                            These Terms and Conditions shall be binding on and inure to the benefit of each party and their respective successors and assigns. Any party (other than GIFTSEANFT) shall not assign or sub-contract any of its rights or obligations under these terms (in whole or in part) without the prior written consent of GIFTSEANFT. GIFTSEANFT shall be entitled to assign or sub-contract any of its rights or obligations under these Terms and Conditions in whole or in part.
                        </li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>Force Majeure: </span> GIFTSEANFT shall not be in breach of these Terms and Conditions if there is, and shall not be liable or have responsibility of any kind for any loss or damage incurred by you as a result of, any total or partial failure, interruption or delay in performance of our duties and obligations occasioned by any act of God, fire, act of government, state, governmental or supranational body or regulatory authority or war, civil commotion, terrorism, failure of any internet or computer system, interruptions of power supplies, labour disputes of whatever nature or any other reason (whether or not similar in kind to any of the above) beyond our reasonable control.
                        </li>
                        <li class='list2'><span style={{ fontStyle: 'italic' }}>Governing Law and Jurisdiction: </span> These Terms and Conditions (and any dispute or claim relating to it or its subject matter (including non-contractual claims) is governed by and is to be construed in accordance with English law. The parties irrevocably agree that the courts of England and Wales shall have exclusive jurisdiction to settle any claim, dispute or issue (including non-contractual claims) which may arise out of or in connection with this agreement.
                        </li>
                    </ol>
                </p>
                <p style={{ fontWeight: 'bold' }}>
                    Additional terms
                </p>

                <p>
                    Investment process additional terms
                </p>
                <p>
                    Applicable if you invest in Non-Fungible Tokens (NFTs)
                </p>
                <ol>
                    <li class='list2'>These additional terms shall apply in the event that an Investor invests in Non-Fungible Tokens (NFTs) (illiquid, hard-to-price securities for which there is a limited or non-existant secondary market) issued by a Company (for the purposes of this Agreement, a company which lists on the Platform and as a means of investments).</li>
                    <li class='list2'>On becoming a member of GIFTSEANFT, you will be able to view each Posting (a Posting being a listing for a Non-Fungible Tokens (NFTs) on the Platform seeking Investment) on our Platform. Some Postings may be reserved for specific, or a restricted group of, Investors at GIFTSEANFT's sole discretion. The information that you have access to in respect of each Posting for a Non-Fungible Tokens (NFTs) will normally include without limitation: name, image, code, design, issue price</li>
                    <li class='list2'>An Investor shall not use any information contained in any Posting (such information being Confidential Information) except for the purposes of considering an investment in the Company. Without limitation, each Investor agrees with GIFTSEANFT and with each Company that it will not directly or indirectly seek to use any Confidential Information to enter into competition with the Company; to solicit employees, customers or suppliers of the Company; or to make further investments in the Company. The Investor undertakes to GIFTSEANFT and the Company that it will not disclose or distribute to any person any Confidential Information without the prior written consent of the Company, unless required to do so by law, a court of competent jurisdiction, or any governmental or regulatory authority. You agree to indemnify the Company and GIFTSEANFT for any loss or damage suffered as a result of any breach of your obligations under this clause. </li>
                    <li class='list2'>You acknowledge that GIFTSEANFT has reviewed each Posting before Investors are able to review it. Before doing so, GIFTSEANFT will ask the Company for evidence that factual statements are correct, and we require that opinions and any projections in the Posting are phrased fairly, clearly and without being misleading. We have approved the contents of the Posting as a financial promotion for the purposes of the FCA Rules. This means that we have concluded that the information, taken as a whole, is “fair, clear and not misleading” as of the date of approval. This means that for factual statements we have reviewed evidence of their accuracy, and that for aspirational statements or statements of opinion or belief we believe that they are phrased appropriately in light of their speculative or subjective nature. You should note that in the case of factual statements, the evidence we review is provided by the business, and while we take reasonable care in our review we do not audit it, which means that we may not be able to and will not be liable if we fail to, identify forged or altered evidence or information or deliberately misleading or inaccurate statements (other than by reason of our willful default or fraud). You should further note that in the case of aspirational statement or statements of opinion or belief, the nature of early-stage businesses is such that we may approve statements which include ambitions which may not be fully realised, and approval does not convey a belief on our part that it is likely that they will be fully realised.
                    </li>
                    <li class='list2'>An Investor should not take our approval of a Posting as any form of recommendation to invest in a GiftseaNFT nor as to the merits of the Company's business or its likelihood of success. Any decision to invest in the Company shall be the Investor's alone. </li>
                    <li class='list2'>All Investments will take the form of subscriptions for non-fungible Tokens, or such class of NFTs which rank equally with those issued to the Investor in respect of their rights and economic terms. It should be noted that this is only correct as at the time that the Investment completes and may be subject to change if future postings are listed by the Company.</li>
                    <li class='list2'>A Company’s Posting will remain open for Investment for an agreed initial period of up to 180 days (the Investment Period). If the Company has not received its Minimum Target Amount by the end of the Investment Period then the Posting will be withdrawn, unless GiftseaNFT and the Company mutually agree to extend the time period for the Posting. If the Company has received its Minimum Target Amount by the end of the Investment Period, then the Posting will proceed to completion.</li>
                    <li class='list2'>An Investor may invest in an NFT at any time during the Investment Period. The Investor shall confirm the amount it wishes to invest (or it wishes the Nominee to invest on its behalf), and shall enter into the provided Subscription Agreement (or shall authorise the Nominee to enter into such agreement) with the Company. The Subscription Agreement means an agreement between an Investor and a Company (or between the Nominee and a Company, as relevant) under which such Investor agrees to subscribe for shares in the Company through the Platform and which sets out the full terms on which the Investor agrees to subscribe for such shares. The investment shall be made, subject to the Minimum Target Amount being reached. The Investor shall transfer funds to the relevant account as advised by GiftseaNFT . The Subscription Agreement shall set out the full terms on which the Investor agrees to subscribe for such shares. After the Investor or the Nominee has entered into a Subscription Agreement, the Investor has the right at any time during the Cooling Off Period (meaning 7 (seven) calendar days commencing on the date of the Subscription Agreement) to cancel its subscription for the shares by notifying GiftseaNFT. Notice of any cancellation must be received by GiftseaNFT during the Cooling Off Period. If an Investor does not exercise their cancellation right during the Cooling Off Period then they will no longer be able to cancel their Investment.</li>
                    <li class='list2'>If an Investor exercises their right to cancel an Investment during the Cooling Off Period, or for any other reason under GiftseaNFT's control, it is required that funds are returned to the Investor, and any funds transferred by him or her by way of investment payment will be refunded to him or her in full. In order to effect this transfer, additional anti-money laundering or other checks to verify the identity of the transferee of the funds and the recipient of the funds may need to take place prior to its return. Accordingly, in order to ensure compliance with anti-money-laundering obligations, there may be a delay in returning funds to an Investor who cancels their Investment until these checks have been completed satisfactorily and they have fully complied with their obligations under the anti-money-laundering regulations. The returned funds will not include or account for any bank fees, which are the responsibility of the Investor, nor any fluctuations in currencies since the original investment transaction.</li>
                    <li class='list2'>A cancelled investment before the end of 180 days will attract a release fee of 30% of the original value.</li>
                    <li class='list2'>You acknowledge all investments made through the Platform are made entirely at the Investor's (as the case may be) own risk and, subject to the terms of the Subscription Agreement or any Investment Agreement, are based on the Investor's (as the case may be) own judgement.</li>
                    <li class='list2'> Except in the event of fraud, no Relevant Person shall be liable or responsible to any Investor or any Company for any of the following matters, and each Relevant Person hereby excludes, to the fullest extent permitted under law (including contract, tort or breach of statutory duty), any and all liability for, or in respect of:
                        <ol>
                            <li class='listpsc2'>the performance of any NFT, the market opportunity, or its ability to meet its business plan or projections or any other information set out in the Posting;</li>
                            <li class='listpsc2'>the suitability of any Company for investment;</li>
                            <li class='listpsc2'> the terms of any investment in a NFT (including without limitation the Subscription Agreement, the Investment Agreement and the Articles); and</li>
                            <li class='listpsc2'> the undertaking or outcome of any due diligence exercise in respect of a NFT or any due diligence report in respect of a NFT (whether legal, financial, technical or otherwise); and</li>
                            <li class='listpsc2'> obtaining any tax relief in relation to an investment in a NFT or that NFT remaining eligible for a tax relief after the investment has been made.
                            </li>
                        </ol>
                    </li>
                    <li class='list2'>Except for in respect of death, personal injury or any other matter for which it would be illegal for a Relevant Person to limit its liability, the total aggregate liability of any Relevant Person under or in connection with these terms or any Investment made through the Platform howsoever arising and whether in contract, tort or otherwise (including for negligence) shall be £1,000. </li>
                    <li class='list2'>We will not be liable to you for any losses, damages or costs arising in the event that you are not able to claim a tax relief on a particular investment, or because any tax relief you have claimed is lost, due to any of the circumstances described in these terms. You are strongly advised to speak with your tax adviser and/or a solicitor before making any investment on the basis that you will be able to receive any tax relief.
                    </li>
                </ol>
                <h4>
                    Terms for service Provision
                </h4>
                <p>
                    Terms & conditions for the provision of custodian, nominee and administrative services
                </p>

                <ol>
                    <li class='list2'>Definitions and Interpretations </li>

                    In these Conditions, unless the context otherwise requires, the following words and expressions shall have the following meanings:

                    <ol>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Administrator"</span> GiftseaNFT assumes the role and responsibilities of the Administrator; </li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Associate"</span> any person or entity that is controlled by GiftseaNFT;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Business Day"</span> a day, other than Saturday, Sunday or public holiday, on which clearing banks are open for non-automated business in the City of London;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"CASS"</span> the FCA’s Client Assets Sourcebook which contains the FCA’s requirements for holding client assets and client money;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Closing Date"</span> the initial closing date and any subsequent date(s) on which a round of fund raising for an Investee Company may be completed, in each case as determined by GiftseaNFT and communicated to the Investor through the Platform;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Commencement Date"</span> in relation to any Investment, the effective date of the Contract pursuant to Condition 2.2;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Confidential Information"</span> all information and materials of any person (whether oral or recorded in any medium), which are marked confidential or which are by their nature clearly confidential, obtained under or in connection with an Investment;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>“Contract" </span> the contract between the Investor and GiftseaNFT and its Associates for the supply of Services in accordance with these Conditions in relation to a particular Investment;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>“Control” </span> the ability to exercise significant influence over the operating or financial policies of any person or entity;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Custodian"</span> GiftseaNFT (or such other Associate of GiftseaNFT as may assume the role and responsibilities of the Custodian with the prior consent of the Investor and GiftseaNFT);</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"EIS"</span> the Enterprise Investment Scheme established under Part 5 of the Income Tax Act 2007 and designed to help small higher-risk trading companies to raise finance by offering a range of tax reliefs ("EIS Relief(s)");</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"EIS Qualifying Company"</span> a company that qualifies for investment under EIS;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Force Majeure Event"</span> has the meaning given to it in Condition 15.2;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"FCA"</span> the Financial Conduct Authority and its statutory successor (or any other body to which its statutory functions have been delegated);</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"FCA Rules"</span> the rules and guidance issued and modified by the FCA from time to time;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"FSMA"</span> the Financial Services and Markets Act 2000;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Investee Company or Company"</span> has the meaning given to Company in the Subscription Agreement;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Investment"</span> the equity or other interest in the Investee Company (as further described in the Subscription Agreement) to be acquired by the Nominee on behalf of the Investor using the Subscription Monies provided by the Investor for such purpose;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Investor"</span> has the meaning given to it in the Subscription Agreement;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Loss"</span>any damages, loss, costs, claims or expenses (excluding any loss of business or profits or any indirect or consequential loss or damage, in each case whether arising from negligence, breach of contract or otherwise);</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Platform"</span> the investment technology platform, operated by GiftseaNFT or any replacement product or service nominated by GiftseaNFT for use by its members;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"PRA"</span> the Prudential Regulation Authority and its statutory successor (or any other body to which its statutory functions have been delegated);</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Professional Client"</span>has the meaning given to it in the FCA Rules; "Retail Client"has the meaning given to it in the FCA Rules;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Services"</span> the custodian, nominee and administration services to be provided by GiftseaNFT under the Contract;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>“Subscription Agreement”</span> the form containing details of the proposed Investment comprising, together with these Conditions, the Contract;</li>
                        <li class='listpsc2'><span style={{ fontWeight: 'bold' }}>"Subscription Monies"</span> the subscription monies for investment in an Investee Company, provided to the Administrator by the Investor; and "GiftseaNFT" Syndicate Room Limited, which is authorised and regulated by the FCA (with a Firm Reference Number of 613021).</li>
                    </ol>
                    <p>
                        1.2 In these Conditions any reference to a "person" shall be construed as a reference to any natural person, partnership, joint venture, corporation, limited liability company or partnership, trust, firm, association or governmental agency or department or any two or more of the foregoing and a reference to a party includes its personal representatives, successors or permitted assigns.
                    </p>
                    <p>
                        1.3 The headings used in these Conditions are for ease of reference only and shall not affect their interpretation.
                    </p>
                    <p>
                        1.4 References in these to the numbered conditions or the Schedule are to the numbered conditions of or the Schedule to the Contract.
                    </p>
                    <p>
                        1.5 Any reference in these Conditions to any statute or statutory provision shall, unless the context otherwise requires, be construed as a reference to such statute or statutory provision (including all instruments, orders or regulations made thereunder or deriving validity therefrom) as in force at the Commencement Date and as subsequently re-enacted or consolidated.
                    </p>
                    <p>
                        1.6 Words denoting any gender include all genders. The singular shall include the plural (and vice versa).
                    </p>
                    <p>
                        1.7 Any phrase introduced by the terms including, include, in particular or any similar expression shall be construed as illustrative and shall not limit the sense of the words preceding those terms.
                    </p>
                    <p>
                        1.8 Section 1124 of the Corporation Tax Act 2010 shall apply to determine whether one person is controlled by another for the purposes of these Conditions.
                    </p>
                    <p>
                        1.9 A reference to writing or written includes emails and other electronic communications messages, including those delivered via the Platform.
                    </p>
                    <li class='list2'>Basis of Contract </li>
                    <p>
                        2.1 These Conditions apply to the provision of the Services to the exclusion of any other terms that GiftseaNFT or any of its Associates may seek to impose or incorporate, or which are implied by trade, custom, practice or course of dealing.
                    </p>
                    <p>
                        2.2 A Contract for the provision of Services in relation to a particular Investment shall be deemed to have been offered by the Investor on the execution by them of the Subscription Agreement relating to such Investment and the payment by the Investor of the Subscription Monies, and accepted by GiftseaNFT when it confirms that the completed Subscription Agreement and any other information reasonably required by it to fulfill its regulatory compliance obligations together with the Subscription Monies have been received, at which point the Contract (incorporating these Conditions) shall come into existence.
                    </p>
                    <p>
                        2.3 In the event of a conflict between these Conditions and the Subscription Agreement, the Subscription Agreement shall prevail. In the event of a conflict between these Conditions and any other document or information provided to the Investor through the Platform or otherwise, these Conditions shall prevail.
                    </p>

                    <li class='list2'>
                        Appointment Of Investment Administrator</li>
                    <p>
                        3.1 GiftseaNFT shall provide the Services in respect of the Investments on the terms set out in these Conditions.
                    </p>
                    <p>
                        3.2 Investax.co Ltd represents and warrants to the Investor that it is authorised and regulated by the ACRA in respect of its investment business (with Firm Reference Number 201300459N) and has the necessary permissions under its authorisation to provide the Services (or procure the provision of Services by its Associates) to the Investor.
                    </p>
                    <li class='list2'>Subscription Process </li>
                    <p>
                        4.1 All decisions as to whether to subscribe for an Investment are the sole responsibility of the Investor.
                    </p>
                    <p>
                        4.2 For the avoidance of doubt, GiftseaNFT is not responsible for:
                        <ol>
                            <li class='listpsc2'> providing the Investor with any advice on the merits of the Investment;
                            </li>
                            <li class='listpsc2'> assessing the suitability or appropriateness of any Investment for the Investor; or </li>

                            <li class='listpsc2'> any activity whatsoever which would constitute the provision of investment management services to the Investor. </li>
                        </ol>
                    </p>

                    <p>
                        4.3 The Investor shall, in relation to each Investment to which they have committed (whether via the Platform or otherwise) and in respect of which they have been granted an allocation by GiftseaNFT, on or prior to the relevant Commencement Date:
                        <ol>
                            <li class='listpsc2'> agree to the terms of the Subscription Agreement; </li>
                            <li class='listpsc2'> make payment of the Subscription Monies to GiftseaNFT (or its Associate) in such a way as specified by GiftseaNFT; and </li>
                            <li class='listpsc2'> provide GiftseaNFT with such documentation as it may require to satisfy:
                                <br /> its anti-money-laundering requirements in respect of the Investor; or
                                <br /> any other obligations arising under the FCA Rules or other regulatory requirements, including, if applicable, a form whereby the Investor consents to be treated as a Professional Client.
                            </li>
                        </ol>
                    </p>
                    <p>
                        4.4 GiftseaNFT is entitled at its discretion to reject any Subscription Agreement which it believes on reasonable grounds to be incomplete or to have been provided in error, or which GiftseaNFT reasonably believes that it cannot for some reason accept without being in breach of relevant FCA Rules. In the event that a Subscription Agreement related to an Investment is not accepted, then any Subscription Monies paid in respect of that Investment shall be returned to the Investor as soon as practicable (and in any event no later than 30 (thirty) days after the relevant Closing Date), whereupon the Contract relating to such proposed Investment will be terminated.
                    </p>
                    <p>
                        4.5 Upon GiftseaNFT notifying an Investor that the Subscription Agreement for an Investment is accepted, then the payment of the Subscription Monies hereunder shall be irrevocable (and the Investor shall not under any circumstances be able to demand repayment of them).
                    </p>
                    <p>
                        4.6 The Investor acknowledges that he or she has read and understands the risk warnings in relation to the Investment which are set out on the Platform.
                    </p>
                    <p>
                        4.7 By agreeing to the terms of the relevant Subscription Agreement the Investor instructs GiftseaNFT to enter into the proposed Investment to which it relates and confirms to GiftseaNFT that he or she is aware of any conditions, warrants, representations or other obligations arising as a result and instructs GiftseaNFT to enter into the same on their behalf.
                    </p>

                    <li class='list2'>
                        The Services </li>

                    <p>
                        5.1 With effect from the Commencement Date, GiftseaNFT will provide the Services to the Investor on the terms and conditions set out in these Conditions.
                    </p>
                    <p>
                        5.2 GiftseaNFT shall act in good faith and perform the Services with reasonable care and skill in accordance with generally recognised commercial practices and standards in the industry for similar services, and observe and comply with all applicable laws and regulations, including but not limited to the FCA Rules (as modified from time to time). GiftseaNFT shall devote such time and attention and have all necessary competent personnel and equipment as may be required to enable them to provide the Services properly, efficiently and in compliance with FCA Rules.
                    </p>
                    <p>
                        5.3 All sums controlled by GiftseaNFT on behalf of the Investor from time to time (including the Subscription Monies, amounts paid on account of fees payable by the Investor, dividends received in cash and disposal proceeds) will be held in a client bank account under the control of GiftseaNFT, held with a UK bank authorised and regulated by the PRA, and in accordance with the FCA’s client money rules contained in CASS. GiftseaNFT may debit or credit the said account for all sums payable by or to the Investor under the Contract. Any interest payable on credit balances in a client bank account will be retained by GiftseaNFT. All charges in respect of a client bank account will be met by GiftseaNFT. GiftseaNFT may pay away to a registered charity of its choice a client’s client money balance provided:
                        <ol>
                            <li class='listpsc2'>It has held it for at least six years following the last movement on the client’s account (disregarding any payment or receipt of interest, charges or similar items),</li>
                            <li class='listpsc2'> GiftseaNFT can demonstrate that it has taken reasonable steps to trace the client concerned and to return the balance, and</li>
                            <li class='listpsc2'> GiftseaNFT undertakes to pay the client a sum equal to the balance paid away in the event of the client seeking to claim the balance in future.</li>
                        </ol>
                    </p>
                    <p>
                        5.4 GiftseaNFT may either liquidate an unclaimed safe custody asset it holds for a client and pay away the proceeds, or pay away an unclaimed safe custody asset it holds for a client, in either case to a registered charity of its choice provided:
                        <ol>
                            <li class='listpsc2'>GiftseaNFT has held that safe custody asset for at least 12 years, and in the 12 years preceding the divestment of that safe custody asset it has not received instructions relating to any safe custody assets from or on behalf of the client concerned,</li>
                            <li class='listpsc2'>GiftseaNFT can demonstrate that it has taken reasonable steps to trace the client concerned and return that safe custody asset, and</li>
                            <li class='listpsc2'> GiftseaNFT unconditionally undertakes to pay to the client concerned a sum equal to the value of the safe custody asset at the time it was liquidated or paid away in the event of the client seeking to claim the safe custody asset in the future.</li>
                        </ol>
                    </p>
                    <p>
                        5.5 GiftseaNFT may not lend any Investments or title documentation to a third party or borrow against the security of such Investments or documents.
                    </p>
                    <p>
                        5.6 Amounts in respect of income received in relation to an Investment or proceeds received on realisation of an Investment by GiftseaNFT on behalf of the Investor may be applied by GiftseaNFT to satisfy any obligation of the Investor under the Contract (for example, GiftseaNFT’s contingent fee or any other fees and expenses, and such other obligations as set out in the Subscription Agreement).
                    </p>
                    <p>
                        5.7 In compliance with the FCA Rules, GiftseaNFT will:
                        <ol>
                            <li class='listpsc2'> provide the Investor with the essential information in relation to the Investment promptly after it has executed such documents as are required to acquire the Investment on behalf of the Investor and, should the Investor request, any information about the status of the Investment during the transaction process; and </li>
                            <li class='listpsc2'> send the Investor a statement of the Investments it holds on their behalf at least once a year. </li>
                        </ol>
                    </p>
                    <p>
                        5.8 The Investor consents to receiving any statements, reports or information provided under this Condition 5 through the Platform or in any other written form including email.
                    </p>

                    <li class='list2'>Fees and Payment </li>
                    <p>
                        6.1 Fees falling due to GiftseaNFT will be charged to the Investee Company by GiftseaNFT on the Closing Date or may be deducted from the Subscription Monies, and/or income from or the proceeds of disposals of Investments as set out in this Condition 6 and where pursuant to the Subscription Agreement or any other agreement. In consideration of the supply of the Services by GiftseaNFT and its Associates, the Investor authorises GiftseaNFT to make such deductions (including for any VAT applicable to any supply of services by either GiftseaNFT or its Associates).
                    </p>
                    <p>
                        6.2 The fees to be charged by GiftseaNFT and its Associates for the Services, and the contingent fees to be charged by GiftseaNFT, are set out in other agreements.
                    </p>
                    <p>
                        6.3 GiftseaNFT shall charge the Investor contingent fees, if any, on disposal (or part disposal) of the Investment, if and as set out in any other agreements.
                    </p>
                    <p>
                        6.4 If another party fails to make any payment that is due to GiftseaNFT under the Contract by the due date for payment, then the defaulting party shall pay interest at a monthly rate of 2% above the base rate of the Bank of England on any fees not paid within a 14 (fourteen) day period. Such interest shall accrue on a daily basis from the due date until the date of actual payment of the overdue amount, whether before or after judgment. The defaulting party shall pay the interest together with the overdue amount. This Condition 6.4 shall not apply to payments that the defaulting party disputes in good faith.
                    </p>

                    <li class='list2'> Distribution of Proceeds and Income </li>
                    <p>
                        7.1 The income or proceeds from the disposal of an Investment will be paid directly to the Investor or may in the first instance be paid to an account as directed by GiftseaNFT, and shall then be distributed to the Investor after deduction of any fees or expenses due to GiftseaNFT as detailed in other agreements.
                    </p>
                    <p>
                        7.2 Any taxation which may become payable in relation to any Investment or the disposal thereof shall be the responsibility and liability of the Investor. For the avoidance of doubt, where an Investment ceases to be an EIS-qualifying investment then the Investor shall be liable to account to HMRC for any tax liability and GiftseaNFT shall not in any way be liable to the Investor to account on behalf of the Investor for any sums due in respect thereof. However, should HMRC or another tax authority demand tax payments from GiftseaNFT in relation to the ostensible liabilities of the Investor, the Contract authorises GiftseaNFT to make the same, subject to full disclosure to the Investor before their making and affording the Investor such time as is reasonable in the circumstances to make representations to HMRC concerning the obligation to pay the same.
                    </p>

                    <li class='list2'>Transfer of Interests </li>
                    <p>
                        8.1 On the death or bankruptcy of the Investor, his or her personal representatives or trustee (as the case may be) shall become the “Investor” in his or her place and entitled to receive any distribution of monies under the Contract as the “Investor”.
                    </p>
                    <p>
                        8.2 On termination of the Contract, the Investments shall (unless otherwise agreed by the Investor) be transferred into the name of the Investor (as the underlying beneficial owner of the Investments) or to another nominee appointed by the Investor.
                    </p>
                    <p>
                        8.3 The Investor undertakes not to instruct a transfer in accordance with this Condition 8 without the prior written approval of GiftseaNFT.
                    </p>
                    <p>
                        8.4 Subject to Conditions 8.1 and 8.2, and except on the disposal of an Investment, no sale, assignment or transfer by the Investor of the underlying beneficial ownership of an Investment or any other rights hereunder shall be valid or effective and GiftseaNFT shall not recognise the same for the purposes of making distributions of monies in accordance with these Conditions or the maintenance of records.
                    </p>
                    <li class='list2'>Exclusivity </li>
                    <p>
                        9.1 The Investor shall not during the term of the Contract appoint any person other than GiftseaNFT to perform the Services (or any part of them) in relation to the Investment.
                    </p>

                    <li class='list2'>Conflicts of Interest </li>
                    <p>
                        10.1 GiftseaNFT may provide custodian, nominee, administrative or other services to any person and shall not in any circumstances be required to account to the Investor for any profits earned in connection therewith. In handling conflicts, GiftseaNFT represents and warrants that it will act in compliance with FCA Rules.
                    </p>
                    <p>
                        10.2 GiftseaNFT is required by FCA Rules to establish, implement and maintain a conflicts of interest policy, which sets out the types of actual or potential conflicts of interest which may affect GiftseaNFT. A copy of this policy will be provided on request.
                    </p>
                    <p>
                        10.3 GiftseaNFT or any Associate may hold investments in any Investee Company.
                    </p>

                    <li class='list2'>Liability </li>
                    <p>
                        11.1 In the event of any failure, interruption or delay in the performance of GiftseaNFT's (or its Associates’) obligations resulting from acts, events or circumstances not reasonably within its control (including but not limited to a Force Majeure Event, war, riot, civil commotion, terrorism or threat thereof, acts or regulations of any governmental or supranational bodies or authorities and breakdown, failure or malfunction of any telecommunications or computer service or systems), neither GiftseaNFT nor its Associate(s) shall be liable or have any responsibility of any kind for any loss or damage thereby incurred or suffered by the Investor.
                    </p>
                    <p>
                        11.2 GiftseaNFT shall not be liable for any defaults of any counterparty, agent, banker, nominee or other person or entity which holds money, investments or documents of title for any Investee Company, other than a party which is an Associate of GiftseaNFT.
                    </p>
                    <p>
                        11.3 Subject to Condition 11.4, GiftseaNFT shall have no liability to the Investor, whether in contract, tort (including negligence), breach of statutory duty or otherwise, for any loss of profit, or for any indirect or consequential loss arising under or in connection with the Contract.
                    </p>
                    <p>
                        11.4 Nothing in the Contract will operate to exclude or restrict GiftseaNFT’s liability for death or personal injury caused by its negligence, or the negligence of its employees, or subcontractors or its fraud, wilful default or fraudulent misrepresentation, or any liability which cannot be limited or excluded under the FCA Rules.
                    </p>
                    <p>
                        11.5 GiftseaNFT does not give any representation or warranty as to the performance of the Non-Fungible Tokens. The Investor acknowledges that the Non-Fungible Tokens are high-risk investments, being non-readily realisable investments. There is a restricted market for such Investments and it may therefore be difficult to sell the Investments or to obtain reliable information about their value. The Investor undertakes that they themselves have considered the suitability of the investment in each of the Non-Fungible Tokens carefully and have noted the risk warnings set out on the Platform. GiftseaNFT shall not be responsible or liable to the Investor for the economic performance of the Investments.
                    </p>
                    <p>
                        11.6 GiftseaNFT shall have no liability to any Investor in respect of any Loss which arises from an Investment not qualifying for EIS Relief or ceasing to qualify to EIS Relief, where relevant.
                    </p>

                    <li class='list2'>Term and Termination </li>
                    <p>
                        12.1 The Contract incorporating these Conditions shall commence on the Commencement Date and continue until such time as the Investment has been disposed of unless terminated earlier in accordance with this Condition 12.
                    </p>
                    <p>
                        12.2 GiftseaNFT’s appointment hereunder may be terminated:
                        <ol>
                            <li class='listpsc2'> by either the Investor or GiftseaNFT if GiftseaNFT ceases to be permitted by law or authorised by the FCA to perform the Services; </li>
                            <li class='listpsc2'> at any time by GiftseaNFT giving the Investor not less than three months’ written notice of its intention to terminate its provision of the Services under the Contract;</li>
                            <li class='listpsc2'> by the Investor notifying GiftseaNFT and receiving written consent from GiftseaNFT that he or she wishes to have all Investments transferred either into his or her name personally or to a different provider of custody, administration and nominee services;</li>
                            <li class='listpsc2'> by either the Investor or GiftseaNFT where GiftseaNFT is itself dissolved or discontinued; or</li>
                            <li class='listpsc2'> by either the Investor or GiftseaNFT if the other has committed a material breach of the Contract, has been requested to rectify it and has failed to do so within 10 (ten) Business Days of being so requested.</li>
                        </ol>
                    </p>
                    <p>
                        12.3 The Investor and GiftseaNFT undertake not to terminate the Services in accordance with Conditions 12.2.3 or 12.2.4 respectively without the prior written approval of GiftseaNFT.
                    </p>
                    <p>
                        12.4 Upon termination, unless an alternative provider of the Services ("Alternative Provider") can be found, the Investments shall be transferred into the Investor’s name or as the Investor may otherwise direct.
                    </p>
                    <li class='list2'> Consequences of Termination </li>
                    <p>
                        13.1 On termination of the Contract pursuant to Condition 12, GiftseaNFT will use best efforts to transfer legal title to the Investor’s Investment expeditiously on the basis set out in these Conditions.
                    </p>
                    <p>
                        13.2 Where applicable, upon termination of the Contract GiftseaNFT will as soon as practicable deliver all documentation and any copies thereof relating to Investments in whatever form it is held to any Alternative Provider, save those copies of any documentation may be retained by GiftseaNFT where it is necessary in order to fulfil a regulatory or legal obligation to keep such records.
                    </p>
                    <p>
                        13.3 Upon termination of the Contract, the parties will as soon as practicable return or destroy (as directed by the supplying parties) all Confidential Information to the party which supplied such Confidential Information, subject to GiftseaNFT’s obligations to maintain records in accordance with the FCA Rules.
                    </p>
                    <p>
                        13.4 The provisions of Conditions 11, 14, 19 and 20, as well as any provisions of the Contract necessary to interpret the same, shall survive the termination of the Contract.
                    </p>
                    <li class='list2'> Confidentiality </li>
                    <p>
                        14.1 Except as provided by Conditions 14.2 and 14.3, each Party shall at all times during the term of the Contract and after the termination or expiry of the Contract:
                        <ol>
                            <li class='listpsc2'> treat in confidence the other's Confidential Information and not disclose the other's Confidential Information to any other person; and </li>
                            <li class='listpsc2'> not use any Confidential Information for any purpose other than for the performance of its obligations under the Contract.</li>
                        </ol>
                    </p>
                    <p>
                        14.2 Any Confidential Information may be disclosed to another Party or to whose attention it comes (the “Recipient”) to:
                        <ol>
                            <li class='listpsc2'> any court, governmental or other authority or regulatory body (including, without limitation, the FCA);</li>
                            <li class='listpsc2'> any employees, agents, consultants or sub-contractors of the Recipient; or </li>
                            <li class='listpsc2'> the provider of Platform services (or any replacement provider of Platform services), and any authorised agent acting for either of them from time to time in relation to the matters with which the Contract is concerned, to such extent only as is necessary for the purposes contemplated by the Contract, or as is required by law, and subject in each case to the Recipient using its reasonable endeavours to ensure that the person to whom it discloses Confidential Information keeps the same confidential.</li>
                        </ol>
                    </p>
                    <p>
                        14.3 Subject to Condition 14.2, any Confidential Information may be used by the Recipient for any purpose, or disclosed by the Recipient to any other person, to the extent only that:
                        <ol>
                            <li class='listpsc2'> it is at the Commencement Date, or thereafter becomes, public knowledge through no fault of the Recipient (provided that in doing so the Recipient shall not disclose any Confidential Information which is not public knowledge); or </li>
                            <li class='listpsc2'> it can be shown by the Recipient, to the reasonable satisfaction of the disclosing Party, to have been known to the Recipient (other than as a result of a breach of confidence) prior to its being disclosed by the disclosing Party or otherwise coming to the attention of the Recipient under or in connection with the Contract. </li>
                        </ol>
                    </p>
                    <p>
                        14.4 Upon termination or expiry of the Contract, each Party shall ensure that all Confidential Information belonging to another Party (in whatever medium the same is recorded or held) is returned, deleted or destroyed according to the written instructions of the other Party, save those copies of any documentation may be retained by a Party where it is necessary in order to fulfil a regulatory or legal obligation to keep such records.
                    </p>
                    <li class='list2'>Force Majeure </li>
                    <p>
                        15.1 Unless otherwise provided and subject to Condition 15.3 below, no Party shall be in default by reason of its failure to perform promptly any part of the Contract if and to the extent that such failure is due to a Force Majeure Event provided that it notifies the other Party of the nature and extent of the circumstances in question as soon as reasonably practicable in the circumstances.
                    </p>
                    <p>
                        15.2 For the purposes of this Condition 15, a "Force Majeure Event" shall mean any event or circumstance beyond the reasonable control of the affected Party including an act of God, explosion, revolution, insurrection, riot, civil commotion, war, national or local emergency, terrorist act, or threat thereof, act of government, strike, fire or flood, as well as any breakdown in or discontinuance or suspension of computer or communications systems which is beyond the reasonable control of the Party claiming to rely upon the Force Majeure Event in question.
                    </p>
                    <p>
                        15.3 If either Party is affected by a Force Majeure Event or Events, it shall use all reasonable endeavours to mitigate and/or eliminate the consequences of such Force Majeure Event or Events and inform the other Party of the steps which it is taking and proposes to take to do so.
                    </p>
                    <p>
                        15.4 If the affected Party is prevented by a Force Majeure Event from performance of its obligations for a continuous period in excess of 30 (thirty) days, the other Party may terminate the Contract forthwith, on service of written notice upon the affected Party, in which case no Party shall have any liability to the other, except rights and liabilities which accrued prior to such termination shall continue to subsist.
                    </p>

                    <li class='list2'> General </li>
                    <p>
                        16.1 GiftseaNFT may assign the Contract in whole or in part and at its sole discretion to any Associate which is appropriately regulated to perform the services hereunder. In such circumstances, GiftseaNFT will notify the Investor of the assignment. The Contract is personal to the Investor and he or she may not assign it.
                    </p>
                    <p>
                        16.2 No omission or delay by any Party in exercising any right, power or privilege under the Contract shall operate as a waiver thereof, nor shall any partial exercise of any such right, power or privilege preclude any other or further exercise thereof or of any other right, power or privilege. The rights and remedies herein provided are cumulative with and are not exclusive of any other rights or remedies provided by law.
                    </p>
                    <p>
                        16.3 Nothing in the Contract shall be construed to create a partnership, agency or joint venture between the Parties.
                    </p>
                    <p>
                        16.4 A person who is not a Party to the Contract has no right under the Contracts (Right of Third Parties) Act 1999 to enforce any provision of the Contract.
                    </p>
                    <p>
                        16.5 The Contract and the documents referred to in it constitute the entire agreement between the parties relating to its subject matter and supersede all earlier meetings, any correspondences, or discussions or other agreements and understandings between the Parties that may have taken place prior to the Commencement Date.
                    </p>
                    <p>
                        16.6 If any term, condition or provision of the Contract shall be held to be invalid, unlawful or unenforceable to any extent, such term, condition or provision shall not affect the validity, legality or enforceability of the remainder of the Contract.
                    </p>
                    <p>
                        16.7 GiftseaNFT may amend the Contract with immediate effect if such amendment is necessary to comply with HMRC requirements or the FCA Rules.
                    </p>

                    <li class='list2'> Notices </li>
                    <p>
                        17.1 Any notice, demand or other communication given or made in connection with the Contract shall be in writing and delivered either personally or by prepaid first-class post or transmitted by electronic mail to the address and contact details contained in the Subscription Agreement.
                    </p>
                    <p>
                        17.2 Such notice, demand or other communication delivered in accordance with Condition 17.1 shall be deemed to have been duly delivered if:
                        <ol>
                            <li class='listpsc2'> personally delivered, upon delivery at the address of the relevant party; </li>
                            <li class='listpsc2'> sent by first-class post, two Business Days after the date of posting; or </li>
                            <li class='listpsc2'> emailed, 60 minutes from the time of transmission, provided that such transmission has not elicited a postmaster or equivalent response from the recipient or its service provider to the effect that the email has failed for some reason specified therein to be delivered. </li>
                        </ol>
                    </p>

                    <li class='list2'>Complaints and Compensation </li>
                    <p>
                        18.1 GiftseaNFT has established procedures in accordance with the FCA Rules for consideration of complaints. Details of these procedures are available upon request. Should the Investor have a complaint he or she should contact GiftseaNFT. If GiftseaNFT cannot resolve the complaint to the satisfaction of the Investor, the Investor may be entitled to refer it to the Financial Ombudsman Service. However, the Investor is warned that if he or she has been classified as a Professional Client, the Financial Ombudsman Service may consider him ineligible to complain.
                    </p>
                    <p>
                        18.2 GiftseaNFT participates in the Financial Services Compensation Scheme, established under FSMA, which provides compensation to an eligible Investor in the event of a firm being unable to meet its liabilities to clients. Payments under the protected investment business scheme are limited to a maximum of the first £50,000 of the claim. Further information is available from GiftseaNFT. However, the Investor is warned that if he or she is classified as a Professional Client, he or she may not be eligible under the criteria of the Financial Services Compensation Scheme to participate, and is further warned that failure of an Investment to deliver a financial return is not a basis for a claim under the Financial Services Compensation Scheme in any event.
                    </p>

                    <li class='list2'> Data Protection Act 1998 </li>
                    <p>
                        19.1 GiftseaNFT represents and warrants to the Investor that it is appropriately registered under the Data Protection Act 1998 (the “DPA”) for all purposes related to the performance of its functions under the Contract, and further represents and warrants that it shall take all reasonable steps to maintain such registration and comply with all applicable data protection legislation for the duration of the Contract.
                    </p>
                    <p>
                        19.2 The personal data which has been provided by the Investor to GiftseaNFT will be held and may be used by GiftseaNFT for the purposes set out in or contemplated by the Contract. The Investor acknowledges that GiftseaNFT may also share the personal data with (or obtain other information about the Investor from) other organisations: (a) for legal or regulatory purposes; (b) in order to check the accuracy of the information which the Investor has provided; or (c) to detect or prevent crime. GiftseaNFT may continue to hold personal data about the Investor after termination of the Contract for legal, regulatory and audit purposes.
                    </p>

                    <li class='list2'> Governing Law and Jurisdiction </li>
                    <p>
                        The Contract shall be governed by and construed in accordance with English law and the Parties agree to submit to the exclusive jurisdiction of the courts of England and Wales.
                    </p>
                </ol>

                <h2>
                    Annexe one
                </h2>
                <h4>
                    Investment risks and warnings
                </h4>
                <p>
                    By using our Platform in any capacity, you acknowledge and agree that you have read and understood the following risks and warnings. If you do not understand any of the risks or warnings set out below, and specifically if you are a private client, you should take advice from an Independent Financial Advisor, a solicitor or a similar qualified professional before using our Platform. The following list of risk factors is not intended to be exhaustive, nor a complete explanation of the risks involved. Any decision to make an investment through our Platform is made entirely at your own risk.
                </p>
                <p>
                    Non-Fungible Tokens investments
                </p>

                <ol>
                    <li class='list2'><span style={{ fontWeight: 'bold' }}>Liquidity Risk: </span> Non-Fungible Tokens are regarded as illiquid, hard-to-price securities for which there is no, or only a limited, secondary market. It is highly unlikely that, in the short to medium term, any secondary market will develop, nor is it likely that any of them will be listed on any recognized crypto market. You are unlikely to be able to sell Non-Fungible Tokens unless and until an offer is made by a buyer. </li>
                    <li class='list2'><span style={{ fontWeight: 'bold' }}>Potential for Loss: </span>  Investing in early-stage Non-Fungible Tokens is inherently risky. Most startups fail. There is therefore a significant chance that you will lose all of the capital that you invest in such tokens that appear on our platform. You are strongly advised to invest no more than you can afford to lose. </li>
                    <li class='list2'><span style={{ fontWeight: 'bold' }}>History: </span>  Non-Fungible Tokens, due in part to their age, may lack any trading or other operating history. The success of any such token will relate to the ability of the directors and staff to develop and deliver on a strategy to achieve that token’s objectives. </li>
                    <li class='list2'><span style={{ fontWeight: 'bold' }}>Forward-looking Statements: </span>  We may provide you certain statements, estimates, projections, forecasts and data provided by the Non-Fungible Tokens with respect to the anticipated future performance of the token and/or its industry. Such projections reflect various assumptions by the company's management concerning anticipated results, and may or may not prove to be correct. Actual results may vary from such projections, and such variations may be material. </li>
                    <li class='list2'><span style={{ fontWeight: 'bold' }}>Diversification: </span>  Given the risks involved in investing in early-stage Non-Fungible Tokens, you are advised to adopt a diversified portfolio of investments and not to invest in Non-Fungible Tokens investments unless you have sufficient disposable income to invest. </li>
                    <li class='list2'><span style={{ fontWeight: 'bold' }}>Dividends: </span> Will be as stated on each token. </li>
                    <li class='list2'><span style={{ fontWeight: 'bold' }}>Dilution: </span> The tokens are meant to have stable and increasing value over time. </li>
                    <li class='list2'><span style={{ fontWeight: 'bold' }}>Taxation: </span> The tokens are not subject to taxation if left to attain maturity. </li>
                    <li class='list2'><span style={{ fontWeight: 'bold' }}>Compensation: </span> Investors will not be able to bring any claim under the Financial Services Compensation Scheme in the event that any Non-Fungible Tokens loses value, or the business invested in fails. However, there may be protections for your cash prior to investment.</li>
                </ol>

            </p>

        </div>
    )
}

export default TermsandContions;