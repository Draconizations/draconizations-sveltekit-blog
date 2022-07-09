// trim the content of posts. Might bring some funkyness but I'll fix that eventually
export function trimPostContent(post: any) {
  // strip html tags
  const parsedContent = post.contents.html.replace(/(<([^>]+)>)/gi, "");

  let trimmedContent = parsedContent.split(' ').slice(0, 42).join(' ');
  
  // apppend ... if there's less than the entire content being shown.
  if (trimmedContent !== parsedContent) {
    trimmedContent += "...";
  }

  return trimmedContent;
}

export const itemsPerPage: number = 5;