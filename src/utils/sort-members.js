import { sortBy } from 'lodash';

export default function (membersData, membersID, activeMembers) {
  const members = membersData.map(item => ({
    ...item,
    name: membersID.find(name => name[1] === item.id)[0],
  }));

  let active = members.filter(i => activeMembers.find(j => j === i.id));
  let reserved = members.filter(i => active.indexOf(i) < 0);

  active = sortBy(active, i => +i.total_votes)
    .map((i, index) => ({ ...i, rank: active.length - index }))
    .reverse();

  reserved = sortBy(reserved, i => +i.total_votes)
    .map((i, index) => ({ ...i, rank: reserved.length - (index - active.length) }))
    .reverse();

  return { active, reserved };
}
