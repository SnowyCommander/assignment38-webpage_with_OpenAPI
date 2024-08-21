$(document).ready(function () {
  async function getData() {
    try {
      const response = await fetch(
        "https://api.odcloud.kr/api/15127329/v1/uddi:293873a5-92dc-46a4-b534-8c12bea5b2de?page=1&perPage=10&serviceKey=rF1zZu77tv0ZegJsuAuoxJUC367OaJgWMauVE6Vxjq8ccKxJE8chA5Mja%2B%2BMGvtEG9nmEAIXpK%2F03iKD0b%2BX6A%3D%3D"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else if (response.status === 400) {
        throw new Error("등록되지 않은 인증키 입니다.");
      } else if (response.status === 401) {
        throw new Error("인증 정보가 정확 하지 않음");
      } else if (response.status === 404) {
        throw new Error("404에러 발생");
      } else if (response.status === 500) {
        throw new Error("API 서버에 문제가 발생하였음");
      } else {
        throw new Error("REST API의 URL이 잘못되었습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const allPosts = $("#allPosts");
  let posts = [];

  getData().then((data)=>{data.data.forEach((post)=>{
    // // 빈 항목 생성 후 값 기입하여 생성한 포스트를 ul에 붙이기
        const newFramePost = $('<li class="post"></li>');
        newFramePost.append(`<div class="Dong">${post["행정동"]}</div>`)
                    .append(`<div class="address">${post["상세주소"]}"</div>`)
                    .append(`<div class="owner">${post["소유자"]}</div>`)
                    .append(`<div class="area">userId : ${post["면적"]}</div>`)
                    .append(`<div class="dateOfconfirmEmpty">${post["빈집판정일"]}</div>`)
                    .append(`<div class="dateOfdataCreated">${post["데이터기준일자"]}</div>`)
                    .append(`<div class="grade">${post["등급"]}</div>`)
                    .append(`<div class="index">${post["연번"]}</div>`);
        $('#allPosts').append(newFramePost);
     })
    })
  });
