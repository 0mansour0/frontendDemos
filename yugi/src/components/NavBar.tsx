import React from 'react'
import { NavButton } from './NavButton';
import { NavBarDiv } from './styled/NavBarDiv.styled';

const Icon1 = () => <svg fill="#7C8391" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 27C9.935 27 5 22.067 5 16 5 9.935 9.935 5 16 5c6.066 0 11 4.935 11 11 0 6.067-4.934 11-11 11zm-5.362-3.836A8.859 8.859 0 0 0 16 24.953c1.075 0 2.13-.191 3.138-.568a42.956 42.956 0 0 0-1.792-6.675c-3.929 1.275-5.954 4.137-6.708 5.454zm8.718-5.93a45.7 45.7 0 0 1 1.673 6.167 8.924 8.924 0 0 0 3.814-6.022 18.372 18.372 0 0 0-3.283-.311 14.353 14.353 0 0 0-2.204.166zM7.045 16c0 2.098.741 4.128 2.088 5.739 1.096-1.711 3.428-4.538 7.475-5.916-.186-.433-.38-.864-.582-1.287-3.483 1.003-7.049 1.252-8.979 1.308L7.045 16zm14.58-.973c1.061 0 2.17.095 3.304.286a8.858 8.858 0 0 0-1.826-4.755c-1.179 1.345-2.895 2.46-5.106 3.319.209.451.419.928.623 1.421.96-.181 1.97-.271 3.005-.271zm-9.869-6.906a8.952 8.952 0 0 0-4.429 5.66c1.715-.073 4.774-.314 7.737-1.103-1.351-2.4-2.615-3.854-3.308-4.557zm2.062-.804c.848.948 2.041 2.487 3.256 4.724 2.058-.767 3.602-1.763 4.598-2.961A8.946 8.946 0 0 0 16 7.046c-.734 0-1.466.091-2.182.271z"></path></g></svg>
const Icon2 = () => <svg fill="#7C8391" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8 20.695l7.997-11.39L24 20.695z"></path></g></svg>
const Icon3 = () => <svg fill="#7C8391" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24.92 12.183c0-1.586-.604-2.864-1.585-3.83.172-.547.398-1.763-.229-3.321 0 0-1.114-.348-3.628 1.315a12.695 12.695 0 0 0-3.081-.366c-1.154 0-2.322.143-3.409.44-2.596-1.747-3.74-1.391-3.74-1.391-.748 1.847-.287 3.215-.145 3.554-.883.936-1.414 2.133-1.414 3.594 0 1.111.128 2.099.44 2.964l.325.732c.879 1.614 2.606 2.655 5.677 2.983-.434.289-.885.779-1.062 1.612-.594.28-2.475.966-3.603-.944 0 0-.633-1.148-1.842-1.235 0 0-1.174-.017-.08.722 0 0 .782.367 1.326 1.738 0 0 .705 2.342 4.114 1.593v2.417s-.076.857-.867 1.143c0 0-.469.312.034.497 0 0 2.205.174 2.205-1.604v-2.643s-.09-1.047.429-1.404v4.332s-.032 1.031-.576 1.421c0 0-.362.646.433.468 0 0 1.517-.211 1.584-1.967l.035-4.383h.363l.033 4.383c.076 1.748 1.59 1.967 1.59 1.967.793.179.429-.468.429-.468-.54-.389-.579-1.421-.579-1.421v-4.297c.52.402.436 1.369.436 1.369v2.643c0 1.777 2.2 1.604 2.2 1.604.505-.186.036-.498.036-.498-.793-.286-.867-1.143-.867-1.143v-3.461c0-1.346-.574-2.056-1.137-2.435 3.277-.318 4.845-1.368 5.572-2.99-.015.027.26-.726.26-.726.25-.859.325-1.855.325-2.963h-.002z"></path></g></svg>
const Icon4 = () => <svg fill="#7C8391" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M25.497 6.503l.001-.003-.004.005L3.5 15.901l11.112 1.489 1.487 11.11 9.396-21.992.005-.006z"></path></g></svg>

export const NavBar = () => {
    return (
        <NavBarDiv bg="base">
            <NavButton text="Company" color="text" bg="base" icon={Icon1()} isActive="true" />
            <NavButton text="People" color="text" bg="base" icon={Icon2()} />
            <NavButton text="Expenses" color="text" bg="base" icon={Icon3()} />
            <NavButton text="Assetes" color="text" bg="base" icon={Icon4()} />
        </NavBarDiv>
    )
}