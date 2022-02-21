// main banner

// videos

// subscriptions

const API_URL = "https://clone-youtube-api-d5dmr.ondigitalocean.app/"

async function fetchData() {
    const response = await fetch(API_URL);
    const responseJson = await response.json();
    return responseJson
}

function populateCategories(categories) {
    const categoriesListUl = document.querySelector(".categories__list");
    const categoriesHtmlArray = categories.map((category, index) => {
       return `<li class="categories__item">
                    <button class="categories__button categories__button--${index === 0 ? "active" : "disabled"}">
                        ${category.name}
                    </button>
                </li>`
    })
    
    const categoriesHtml = categoriesHtmlArray.join(" ");
    categoriesListUl.insertAdjacentHTML("beforeend", categoriesHtml)
}

function populateSubscriptions(subscriptions) {
    const menuGroupListUl = document.getElementById("menu-group__list");
    const subscriptionsHtmlArray = subscriptions.map((subscription, index) => {
      return `
             <li class="menu-group__item">
                  <a href="${subscription.link}" class="menu-group__link">
                  <img class="menu-group__icon menu-group__icon--image" src="${subscription.thumb}">
                  <span class="menu-group__text">
                      ${subscription.name}
                  </span> 
                  <span class="menu-group__alert"></span>
                  </a>
              </li>
          `;
    });
    const subscriptionsHtml = subscriptionsHtmlArray.join(" ");
    menuGroupListUl.insertAdjacentHTML("afterbegin", subscriptionsHtml);
}

function populateMainBanner(mainBanner) {
    const bannerSection = document.querySelector(".banner");
    console.log(mainBanner)
    bannerSection.insertAdjacentHTML("beforeend", `
    <img src="./assets/imagens/banner.png" alt="Tu contenido favorito, sin publicidad" class="banner__image">
    <div class="banner__info">
        <svg class="banner__logo" width="159" height="20" viewBox="0 0 159 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 1.78814e-07 14.285 0 14.285 0C14.285 0 5.35042 1.78814e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C1.78814e-07 5.35042 0 10 0 10C0 10 1.78814e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"/>
            <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"/>
            <path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z" fill="black"/>
            <path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z" fill="black"/>
            <path d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z" fill="black"/>
            <path d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z" fill="black"/>
            <path d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z" fill="black"/>
            <path d="M80.6091 8.0387C80.4374 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8758 5.79035 78.2079 5.79035C77.6905 5.79035 77.206 5.93616 76.7568 6.23014C76.3076 6.52412 75.9595 6.90747 75.7149 7.38489H75.6938V0.785645H72.9774V18.5608H75.3057L75.5926 17.3755H75.6538C75.8725 17.7988 76.1994 18.1304 76.6345 18.3774C77.0696 18.622 77.5541 18.7443 78.0856 18.7443C79.0381 18.7443 79.7413 18.3045 80.1905 17.4272C80.6397 16.5476 80.8654 15.1765 80.8654 13.3092V11.3266C80.8654 9.92722 80.7784 8.82892 80.6091 8.0387ZM78.0244 13.1492C78.0244 14.0617 77.9868 14.7767 77.9115 15.2941C77.8363 15.8115 77.7116 16.1808 77.5329 16.3971C77.3565 16.6158 77.1166 16.724 76.8179 16.724C76.5851 16.724 76.3711 16.6699 76.1735 16.5594C75.976 16.4512 75.8161 16.2866 75.6938 16.0702V8.96062C75.7878 8.6196 75.9525 8.34209 76.1853 8.12337C76.4158 7.90465 76.6698 7.79646 76.9402 7.79646C77.2272 7.79646 77.4482 7.90935 77.6035 8.13278C77.761 8.35855 77.8692 8.73485 77.9304 9.26636C77.9915 9.79787 78.0221 10.5528 78.0221 11.5335V13.1492H78.0244Z" fill="black"/>
            <path d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z" fill="black"/>
            <path d="M102.13 6.4051V7.0551C102.13 10.5051 100.6 12.5351 97.25 12.5351H96.74V18.5351H94V1.4751H97.49C100.68 1.4751 102.13 2.8251 102.13 6.4051ZM99.25 6.6551C99.25 4.1651 98.8 3.5651 97.25 3.5651H96.74V10.5651H97.21C98.68 10.5651 99.21 9.5051 99.21 7.1951L99.25 6.6551Z" fill="black"/>
            <path d="M108.6 5.88514L108.46 9.13514C107.29 8.89514 106.33 9.05514 105.86 9.82514V18.6051H103.19V6.05514H105.36L105.6 8.76514H105.7C105.98 6.76514 106.9 5.76514 108.09 5.76514C108.26 5.78514 108.44 5.82514 108.6 5.88514Z" fill="black"/>
            <path d="M111.73 13.3047V13.9347C111.73 16.1447 111.85 16.9347 112.79 16.9347C113.73 16.9347 113.89 16.2447 113.91 14.8147L116.34 14.9547C116.52 17.6547 115.11 18.8547 112.73 18.8547C109.83 18.8547 108.97 16.9547 108.97 13.5047V11.2747C108.97 7.63475 109.97 5.86475 112.81 5.86475C115.65 5.86475 116.45 7.37475 116.45 11.1547V13.3047H111.73ZM111.73 10.7247V11.6247H113.79V10.7347C113.79 8.43475 113.63 7.73475 112.79 7.73475C111.95 7.73475 111.79 8.40475 111.79 10.7347L111.73 10.7247Z" fill="black"/>
            <path d="M130.48 9.15534V18.6153H127.66V9.36534C127.66 8.36534 127.39 7.83534 126.78 7.83534C126.24 7.85534 125.76 8.17534 125.53 8.65534C125.54 8.82534 125.54 8.99534 125.53 9.16534V18.6253H122.74V9.36534C122.74 8.36534 122.47 7.83534 121.86 7.83534C121.33 7.85534 120.86 8.16534 120.63 8.63534V18.6353H117.86V6.05534H120.09L120.34 7.64534C120.85 6.52534 121.97 5.79534 123.2 5.78534C124.25 5.71534 125.18 6.45534 125.36 7.48534C125.91 6.47534 126.97 5.83534 128.12 5.82534C129.86 5.83534 130.48 7.05534 130.48 9.15534Z" fill="black"/>
            <path d="M131.86 2.88502C131.86 1.53502 132.35 1.14502 133.39 1.14502C134.43 1.14502 134.92 1.59502 134.92 2.88502C134.92 4.17502 134.45 4.62502 133.39 4.62502C132.33 4.62502 131.86 4.27502 131.86 2.88502ZM132.05 6.05502H134.75V18.615H132.05V6.05502Z" fill="black"/>
            <path d="M143.96 6.05518V18.6152H141.76L141.51 17.0552H141.45C140.99 18.1352 139.92 18.8252 138.75 18.7952C137.08 18.7952 136.32 17.7352 136.32 15.4252V6.05518H139.14V15.2452C139.14 16.3452 139.37 16.7952 139.94 16.7952C140.46 16.7752 140.92 16.4652 141.14 15.9952V6.05518H143.96Z" fill="black"/>
            <path d="M158.26 9.15454V18.6145H155.44V9.36454C155.44 8.36454 155.17 7.83454 154.56 7.83454C154.02 7.85454 153.54 8.17454 153.31 8.65454C153.32 8.82454 153.32 8.99454 153.31 9.16454V18.6245H150.52V9.36454C150.52 8.36454 150.25 7.83454 149.64 7.83454C149.11 7.85454 148.64 8.16454 148.41 8.63454V18.6345H145.6V6.05454H147.86L148.1 7.64454C148.61 6.52454 149.73 5.79454 150.96 5.78454C152 5.71454 152.93 6.42454 153.13 7.44454C153.68 6.45454 154.73 5.83454 155.86 5.82454C157.61 5.83454 158.26 7.05454 158.26 9.15454Z" fill="black"/>
        </svg>
        <h2 class="banner__title">
            ${mainBanner.title}
        </h2>
        <a href="#" class="banner__link">
            ${mainBanner.link}
        </a>
    </div>

    `)
}

function transformThousandsInK(thousands) {
    const thousandsString = String(thousands); // 27000
    const thousandsLength = thousandsString.length; // 4
    if (thousandsLength < 4) {
        return thousands; // 900
    } else {
        return thousandsString.substring(0, thousandsLength - 3);
    }
}

function secondsToMinutes(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds - minutes * 60;
    return {
        minutes,
        seconds
    };
}

function videoPublishedAgo(createdAt) {
    const now = new Date(); // data atual
    const createdAtDate = new Date(createdAt); // data de criação do videio na Api

    const dateNowTime = now.getTime();
    const createdAtTime = createdAtDate.getTime();

    const daysAgo = Math.floor((dateNowTime - createdAtTime) / (24 * 3600 * 1000));

    return daysAgo > 1 ? `${daysAgo} days ago` : `${daysAgo} day ago`;
}

function populateVideos(videos) {
    const galleryListUl = document.querySelector(".gallery__list");
    const videosHtmlsArray = videos.map((video) => {
        const time = secondsToMinutes(video.seconds);
        return `
        <li class="gallery__item">
            <div class="gallery__video">
                <div class="gallery-video__thumb">
                    <img src="./assets/imagens/video-thumb1.png" alt="" srcset="" class="gallery-video__image">
                    <span class="gallery-video__time">
                        ${time.minutes}:${time.seconds}
                    </span>
                </div>
                <div class="gallery-video__info">
                    <div class="gallery-video__block--left">
                        <img src="./assets/imagens/video-user-avatar1.png" alt="" class="gallery-video__avatar">
                    </div>
                    <div class="gallery-video__right">
                        <span class="gallery-video__name">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </span>
                        <span class="gallery-video__name-user">
                            ${video.author}
                            ${
                                video.verified
                                ? ` 
                                <svg class="gallery-video__icon--check" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM3.96 7.965L1.485 5.49L2.51 4.465L3.96 5.915L7.635 2.24L8.66 3.265L3.96 7.965Z" fill="#727272"/>
                                </svg>
                            ` : "" 
                            }   
                        </span>
                        <span class="gallery-video__text"> 
                            ${transformThousandsInK(video.views)}K views • ${videoPublishedAgo(video.createdAt)}
                        </span>
                    </div>
                </div>
            </div>
        </li>
        `
    })
    const videosHtml = videosHtmlsArray.join(" ");

    galleryListUl.insertAdjacentHTML("beforeend", videosHtml)
}

async function main() {
    const data = await fetchData();
    populateCategories(data.categories);
    populateSubscriptions(data.subscriptions);
    populateMainBanner(data.mainBanner);
    populateVideos(data.videos)
    console.log(data)
}

main()