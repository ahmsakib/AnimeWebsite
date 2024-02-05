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
        <button>
          <img src="images/dots.png" class="profile-info-menu">
        </button>
      </div>
    </div>
  </div>
  <div>
    <img src="${post.pic}" alt="post" class="post-image">
  </div>
  <div class="post-interaction">
    <div>
      <i class="fa-regular fa-heart"></i>
      <i class="fa-regular fa-comment"></i>
      <i class="fa-regular fa-paper-plane"></i>
    </div>
    <div>
      <i class="fa-regular fa-bookmark"></i>
    </div>
  </div>
  <div class="post-likes">
    <p>${post.likes} likes</p>
  </div>
  <div class="post-caption">
    <div class="caption-profile">${post.name}</div>
    <div class="caption text">${post.caption}</div>
  </div>
  <div class="post-comment">
    View all ${post.comments} Comments
  </div>
  <div class="add-comment">
    Add a comment
  </div>
</div>
`;
});

document.querySelector('.post-list')
  .innerHTML = postHTML;
