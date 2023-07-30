export default function FAQ() {
  return (
    <div className="bg-black-200 px-6 py-8 text-black-800">
      <h1 className="text-lg font-semibold mb-2">자주 묻는 질문</h1>
      <h2 className="font-medium">사전에 면담을 해볼 수 있나요?</h2>
      <div className="mt-1 mb-3">
        부모님이 신청시 입력한 전화번호를 전달해 드려요. 직접 연락 후 조율해
        진행하실 수 있어요.
      </div>
      <h2 className="font-medium">신청이 거절되기도 하나요?</h2>
      <div className="mt-1 mb-3">
        부모님의 스케줄에 따라서, 혹은 여러명의 신청서가 들어왔을 때 거절할 수도
        있어요.
      </div>
      <h2 className="font-medium">비용은 어떻게 되나요?</h2>
      <div className="mt-1 mb-3">
        서비스 이용 확정 시 가입하신 이메일과 전화번호로 결제 방법과 함께 비용
        내역을 보내드려요.
      </div>
    </div>
  );
}
