import * as React from 'react';

export interface IProfile {
  readonly name: string
  readonly photo: string
}

export const Profile = (props: IProfile) => {
  const [firstName] = props.name.split(/\s+/i);
  return (
    <div>
      <h1>{firstName}</h1>
      <img src={props.photo} alt={props.name} style={{width: "153px"}} />
    </div>
  )
}
