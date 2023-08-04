import Button from "@/components/common/Button";

export default function SetTime({
  year,
  setYear,
  month,
  setMonth,
  date,
  setDate,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  isStartTimeAM,
  setIsStartTimeAM,
  isEndTimeAM,
  setIsEndTimeAM,
  setStatus,
}) {
  const handleTimeCheck = () => {
    const shour = parseInt(startTime.hour);
    const sminute = parseInt(startTime.minute);
    if (shour > 24) setStartTime((s) => ({ ...s, hour: "12" }));
    else if (shour > 12 && isStartTimeAM) {
      setStartTime((s) => ({ ...s, hour: `${shour - 12}` }));
      setIsStartTimeAM(false);
    }
    if (sminute > 60) setStartTime((s) => ({ ...s, minute: "00" }));

    const ehour = parseInt(endTime.hour);
    const eminute = parseInt(endTime.minute);
    if (ehour > 24) setEndTime((s) => ({ ...s, hour: "12" }));
    else if (ehour > 12 && isEndTimeAM) {
      setEndTime((s) => ({ ...s, hour: `${ehour - 12}` }));
      setIsEndTimeAM(false);
    }

    if (eminute > 60) setEndTime((s) => ({ ...s, minute: "00" }));
  };

  return (
    <>
      <div className="px-4">
        <h1 className="text-h1">원하는 돌봄 일정을 알려주세요.</h1>

        <div className="divide-y flex flex-col gap-6">
          <div>
            <div className="text-subtitle text-black-800 mt-4">시작 날짜</div>
            <div className="flex items-center gap-2 mt-2">
              <input
                className="input w-20 text-center bg-black-200 font-bold text-lg"
                placeholder="2023"
                defaultValue={2023}
                maxLength={4}
                type="number"
                onChange={(e) => setYear(e.target.value)}
              />
              년
              <input
                className="input w-16 text-center bg-black-200 font-bold text-lg ml-4"
                placeholder={new Date().getMonth() + 1}
                maxLength={2}
                type="number"
                onChange={(e) => setMonth(e.target.value)}
              />
              월
              <input
                className="input w-16 text-center bg-black-200 font-bold text-lg ml-4"
                placeholder={new Date().getDate()}
                maxLength={2}
                type="number"
                onChange={(e) => setDate(e.target.value)}
              />
              일
            </div>
          </div>

          <div>
            <div className="text-subtitle text-black-800 mt-4">시작 시간</div>
            <div className="flex items-center gap-4 mt-2">
              <input
                className="input w-16 text-center bg-black-200 font-bold text-lg"
                placeholder="00"
                maxLength={2}
                type="number"
                value={startTime.hour}
                onChange={(e) =>
                  setStartTime((s) => ({
                    ...s,
                    hour: e.target.value,
                  }))
                }
                onBlur={() => handleTimeCheck()}
              />
              :
              <input
                className="input w-16 text-center bg-black-200 font-bold text-lg"
                placeholder="00"
                type="number"
                value={startTime.minute}
                onChange={(e) =>
                  setStartTime((s) => ({
                    ...s,
                    minute: e.target.value,
                  }))
                }
                onBlur={() => handleTimeCheck()}
              />
              <input
                className="checked:font-extrabold checked:text-black text-black-800 text-lg font-normal btn btn-ghost checked:!btn-ghost"
                name="starttime"
                type="radio"
                aria-label="오전"
                checked={isStartTimeAM}
                onChange={() => {
                  setIsStartTimeAM((s) => !s);
                }}
              />
              ∙
              <input
                className="checked:font-extrabold checked:text-black text-black-800 text-lg font-normal btn btn-ghost checked:!btn-ghost"
                name="starttime"
                type="radio"
                aria-label="오후"
                checked={!isStartTimeAM}
                onChange={() => {
                  setIsStartTimeAM((s) => !s);
                }}
              />
            </div>
          </div>

          <div>
            <div className="text-subtitle text-black-800 mt-4">종료 시간</div>
            <div className="flex items-center gap-4 mt-2">
              <input
                className="input w-16 text-center bg-black-200 font-bold text-lg"
                placeholder="00"
                maxLength={2}
                type="number"
                value={endTime.hour}
                onChange={(e) =>
                  setEndTime((s) => ({
                    ...s,
                    hour: e.target.value,
                  }))
                }
                onBlur={() => handleTimeCheck()}
              />
              :
              <input
                className="input w-16 text-center bg-black-200 font-bold text-lg"
                placeholder="00"
                type="number"
                value={endTime.minute}
                onChange={(e) =>
                  setEndTime((s) => ({
                    ...s,
                    minute: e.target.value,
                  }))
                }
                onBlur={() => handleTimeCheck()}
              />
              <input
                className="checked:font-extrabold checked:text-black text-black-800 text-lg font-normal btn btn-ghost checked:!btn-ghost"
                name="endtime"
                type="radio"
                aria-label="오전"
                checked={isEndTimeAM}
                onChange={() => {
                  setIsEndTimeAM((s) => !s);
                }}
              />
              ∙
              <input
                className="checked:font-extrabold checked:text-black text-black-800 text-lg font-normal btn btn-ghost checked:!btn-ghost"
                name="endtime"
                type="radio"
                aria-label="오후"
                checked={!isEndTimeAM}
                onChange={() => {
                  setIsEndTimeAM((s) => !s);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Button
        className="absolute inset-x-4 w-auto bottom-4"
        disabled={
          !year ||
          !month ||
          !date ||
          !startTime.hour ||
          !startTime.minute ||
          !endTime.hour ||
          !endTime.minute
        }
        onClick={() => setStatus(1)}
      >
        다음
      </Button>
    </>
  );
}
