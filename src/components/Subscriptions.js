import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { CHANNEL_API } from "../utils/constants";

const Subscriptions = () => {
  const [channels, setChannels] = useState();
  const subscriptionList = useSelector(
    (state) => state.userAction.subscription
  );
  const commaSeparatedList = subscriptionList.join(",");
  useEffect(
    function () {
      async function fetchChannel() {
        const res = await fetch(CHANNEL_API + commaSeparatedList);
        const data = await res.json();
        console.log(data.items);
        setChannels(data.items);
      }
      fetchChannel();
    },
    [commaSeparatedList]
  );
  return (
    <div className="flex flex-col m-5 ">
      <div className="text-4xl pb-10">
        Your <span className="text-red-600 font-semibold">Subscriptions </span>
      </div>
      <div className="flex flex-wrap space-x-2 space-y-2 justify-center">
        {channels?.length > 0 ? (
          channels.map((channel) => (
            <VideoCard key={channel.id} info={channel} />
          ))
        ) : (
          <div className="text-xl font-bold text-red-600">
            You have no subscriptions
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscriptions;
