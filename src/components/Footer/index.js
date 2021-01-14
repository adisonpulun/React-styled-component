import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter
} from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialLogo,SocialIcons, SocialMedia, SocialMediaWrap } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>By-coke@2021</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/cocacolaTH" target="_blank" aria-label="Facebook" >
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/cocacola" target="_blank" aria-label="Instagram" >
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/user/cocacola" target="_blank" aria-label="Youtube" >
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/cocacola_th" target="_blank" aria-label="Twitter" >
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>

    )
}

export default Footer
