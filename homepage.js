import {post} from "./post.js";

let postHTML = '';

post.forEach((post) => {
  postHTML += `
<div class="post-section">
  <div class="post-profile">
    <div>
      <img src="${post.img}" class="profile-info-image">
    </div>
    <div class="post-profile-info">
      <div class="profile-name">${post.name} &#183; ${post.hour}hr</div>
      <div>
          <i class="fa-solid fa-ellipsis fa-lg" style="color: #ffffff;"></i>
      </div>
    </div>
  </div>
  <div>
    <img src="${post.pic}" alt="post" class="post-image">
  </div>
  <div class="post-interaction">
    <div>
      <i class="fa-regular fa-heart fa-xl" style="color: #ffffff;"></i>
      <i class="fa-regular fa-comment fa-xl" style="color: #ffffff;"></i>
      <i class="fa-regular fa-paper-plane fa-xl" style="color: #ffffff;"></i>
    </div>
    <div>
      <i class="fa-regular fa-bookmark fa-xl" style="color: #ffffff;"></i>
    </div>
  </div>
  <div>
    <p class="post-likes">${post.likes} likes</p>
  </div>
  <div class="post-caption">
    <div class="caption-profile">${post.name}</div>
    <div class="caption text">${post.caption}</div>
  </div>
  <div class="post-comment">
    View all ${post.comments} Comments
  </div>
  <div class="add-comment">
    Add a comment...
  </div>
</div>
`;
});

document.querySelector('.post-list')
  .innerHTML = postHTML;


  //JS SCROLL
  let currentScrollPosition = 0;
  let scrollAmount = 320;

  const sCont = document.querySelector(".story-container");
  const hScroll = document.querySelector(".stories");
  const btnScrollLeft = document.querySelector("#btn-scroll-left");
  const btnScrollRight = document.querySelector("#btn-scroll-right");

  btnScrollLeft.style.opacity = "0";


  let maxscroll = sCont.offsetWidth - hScroll.offsetWidth;

  function scrollHorizontally(val) {
      currentScrollPosition += val * scrollAmount;

      if (currentScrollPosition < 0) {
          currentScrollPosition = 0;
          btnScrollLeft.style.opacity = "0";
      }
      else {
          btnScrollLeft.style.opacity = "1";
      }
      if (currentScrollPosition > maxscroll) {
          currentScrollPosition = maxscroll;
          btnScrollRight.style.opacity = "0";
      }
      else {
          btnScrollRight.style.opacity = "1";
      }

      sCont.style.left = -currentScrollPosition + "px";
  }
