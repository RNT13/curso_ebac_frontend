document.addEventListener('DOMContentLoaded', function() {
    const avatarElement = document.querySelector('#avatar');
    const nameElement = document.querySelector('#name');
    const userNameElement = document.querySelector('#username');
    const bioElement = document.querySelector('#bio');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const follwingElement = document.querySelector('#following');
    const link1Element = document.querySelector('#link1');
    const link2Element = document.querySelector('#link2');

    fetch('https://api.github.com/users/RNT13').then(function(res) {
        return res.json();
    })
    .then(function(json) {
        avatarElement.src = json.avatar_url;
        nameElement.innerHTML = json.name;
        userNameElement.innerHTML = json.login;
        bioElement.innerHTML = json.bio;
        reposElement.innerHTML = json.public_repos;
        followersElement.innerHTML = json.followers;
        follwingElement.innerHTML = json.following;
        link1Element.href = json.html_url;
        link2Element.href = json.blog;
    })
})