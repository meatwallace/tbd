import * as React from "react";
import { ListItem } from "./ListItem";
import type { Task } from "../types";

type Props = Task & {};

export function TaskListItem(props: Props) {
  return <ListItem>{props.title}</ListItem>;
}
