const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const CYAN = '\x1b[36m';

export function red(str: string): string {
  return `${RED}${str}${RESET}`;
}

export function blue(str: string): string {
  return `${BLUE}${str}${RESET}`;
}

export function yellow(str: string): string {
  return `${YELLOW}${str}${RESET}`;
}

export function cyan(str: string): string {
  return `${CYAN}${str}${RESET}`;
}

export function green(str: string): string {
  return `${GREEN}${str}${RESET}`;
}
