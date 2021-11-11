// {
//     let container = document.querySelector('.container');
//     if (container) {
//         let asideSocial = document.querySelector('.side-social');
//         if (asideSocial) {
//             const setAsidePanelPosition = () => {
//                 if (document.documentElement.clientWidth > 992) {
//                     let containerLeft = container.getBoundingClientRect().left;
//                     if (containerLeft > 60) {
//                         asideSocial.style.left = containerLeft - 40 + 'px';
//                     } else {
//                         asideSocial.style.left = '5px';
//                     }
//                 }
//             }

//             setAsidePanelPosition();

//             window.addEventListener('resize', setAsidePanelPosition);
//         }
//     }
// }