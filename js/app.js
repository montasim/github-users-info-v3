const viewUser = async() => {
    // clear previous result
    document.getElementById('display-user').innerHTML = '';

    // get input from user
    const searchInput = document.getElementById('input-field').value;

    console.log(searchInput)

    if(searchInput == ''){
        return alert('Please Enter A Username');
    }
    else{
        const url = `https://api.github.com/users/${searchInput}`;
        
        try{
            const response = await fetch(url);
            const user = await response.json();

            console.log(user);

            // clear search field
            document.getElementById('input-field').value = '';
        
            const displayUser = document.getElementById('display-user');

            if(user.id == undefined){
                displayUser.innerHTML = `
                    <div class=" mx-auto text-center">
                        <p>User Not Found!</p>
                    </div>
                    `
            }
            else{
                displayUser.innerHTML = `
                    <div>
                      <div class="card mx-auto col-lg-8 col-10">
                        <div class="rounded-circle mx-auto m-4 d-flex justify-content-center align-items-center">
                          <img
                            src="${user.avatar_url}"
                            class="rounded-circle p-2 w-50"
                            alt="..."
                          />
                        </div>
                        <div class="card-body text-center">
                          <p id="pretext-value" class="fs-5">ID: ${user.id} </p>
                          <h2 id="value" class="h1">${user.name}</h2>
                        </div>
                        <div class="p-4">
                          <nav
                            class="nav d-flex justify-content-center align-items-center gap-5"
                          >
                            <svg
                              id="display-name"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                              />
                            </svg>
                            <svg 
                              id="display-email"
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 512 512">
                              <path
                                d="M493.6 163c-24.88-19.62-45.5-35.37-164.3-121.6C312.7 29.21 279.7 0 256.4 0H255.6C232.3 0 199.3 29.21 182.6 41.38c-118.8 86.25-139.4 101.1-164.3 121.6C6.75 172 0 186 0 200.8v263.2C0 490.5 21.49 512 48 512h416c26.51 0 48-21.49 48-47.1V200.8C512 186 505.3 172 493.6 163zM303.2 367.5C289.1 378.5 272.5 384 256 384s-33.06-5.484-47.16-16.47L64 254.9V208.5c21.16-16.59 46.48-35.66 156.4-115.5c3.18-2.328 6.891-5.187 10.98-8.353C236.9 80.44 247.8 71.97 256 66.84c8.207 5.131 19.14 13.6 24.61 17.84c4.09 3.166 7.801 6.027 11.15 8.478C400.9 172.5 426.6 191.7 448 208.5v46.32L303.2 367.5z"
                              />
                            </svg>
                            <svg 
                              id="display-dob"
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 448 512">
                              <path
                                d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z"
                              />
                            </svg>
                            <svg 
                              id="display-location"
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 576 512">
                              <path
                                d="M408 120C408 174.6 334.9 271.9 302.8 311.1C295.1 321.6 280.9 321.6 273.2 311.1C241.1 271.9 168 174.6 168 120C168 53.73 221.7 0 288 0C354.3 0 408 53.73 408 120zM288 152C310.1 152 328 134.1 328 112C328 89.91 310.1 72 288 72C265.9 72 248 89.91 248 112C248 134.1 265.9 152 288 152zM425.6 179.8C426.1 178.6 426.6 177.4 427.1 176.1L543.1 129.7C558.9 123.4 576 135 576 152V422.8C576 432.6 570 441.4 560.9 445.1L416 503V200.4C419.5 193.5 422.7 186.7 425.6 179.8zM150.4 179.8C153.3 186.7 156.5 193.5 160 200.4V451.8L32.91 502.7C17.15 508.1 0 497.4 0 480.4V209.6C0 199.8 5.975 190.1 15.09 187.3L137.6 138.3C140 152.5 144.9 166.6 150.4 179.8H150.4zM327.8 331.1C341.7 314.6 363.5 286.3 384 255V504.3L192 449.4V255C212.5 286.3 234.3 314.6 248.2 331.1C268.7 357.6 307.3 357.6 327.8 331.1L327.8 331.1z"
                              />
                            </svg>
                            <svg 
                            id="display-blog"
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 496 512">
                            <path 
                                d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"/>
                            </svg>
                          </nav>
                        </div>
                      </div>
                    </div>
                `

                // display name on icon click
            document.getElementById('display-name').onclick = _ => {
                changeValue(`ID: ${user.id}`, `${user.name}`);
              }
  
              // display email on icon click
              document.getElementById('display-email').onclick = _ => {
                changeValue(`${user.name}'s email address is`, `${user.email}`);
              }
  
              // display date of birth on icon click
              document.getElementById('display-dob').onclick = _ => {
                changeValue('User Created At', `${user.created_at.slice(0, 10)}`);
              }
  
              // display location on icon click
              document.getElementById('display-location').onclick = _ => {
                changeValue(`${user.name}'s address is`, `${user.location}`);
              }
  
              // display phone number on icon click
              document.getElementById('display-blog').onclick = _ => {
                changeValue(`${user.name}'s Blog is`, `${user.blog}`);
              }
            }
        }
        catch (error){
            console.log(error);
        }
    }
}

// while pressing enter
var input = document.getElementById('input-field');
input.addEventListener('keyup', function (event) {
if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('search-btn').click();
    }
});

// change value on button click
const changeValue = (value1, value2) => {
    document.getElementById('pretext-value').innerText = value1;
    document.getElementById('value').innerText = value2;
  }

