$(document).ready(function () {
  const allPosts = $("#allPosts");
  let posts = [];
  async function getData() {
    try {
      const response = await fetch(
        "https://api.odcloud.kr/api/15127329/v1/uddi:293873a5-92dc-46a4-b534-8c12bea5b2de?serviceKey=rF1zZu77tv0ZegJsuAuoxJUC367OaJgWMauVE6Vxjq8ccKxJE8chA5Mja++MGvtEG9nmEAIXpK/03iKD0b+X6A==&page=1&perPage=10"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
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

  getData();
});
