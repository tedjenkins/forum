// * --------------------------------
// * Helper functions and properties.
// * --------------------------------

// Global site title.
const siteName = 'Site Title';

// localStorage key for hiding / showing sidebar sections.
const lsEntry = `${siteName
  .toLowerCase()
  .split(' ')
  .join('-')}-hidden-sections`;

export const props = {
  siteName,
  lsEntry
};

export const utils = {
  /**
   * Expand / collapse sidebar sections on mobile on click (or tap).
   * @param {HTMLElement} targ -- "event.target".
   * @param {HTMLElement} sect -- element to show / hide.
   */
  expandCollapseSection: (targ: HTMLElement, sect: HTMLElement) => {
    if (
      targ.nodeName !== 'H4' ||
      window.matchMedia('(min-width: 1200px').matches
    ) {
      return;
    }

    sect.classList.toggle('side-interface-hidden');

    if (localStorage.getItem(props.lsEntry) === null) {
      // Sect will be collapsed on first-time init so add it to storage
      localStorage.setItem(props.lsEntry, JSON.stringify([sect.id]));
      return;
    }

    const data: string[] = JSON.parse(localStorage.getItem(
      props.lsEntry
    ) as string);

    // Insert / delete sect.id from array as necessary
    if (data.includes(sect.id)) {
      data.splice(data.indexOf(sect.id), 1);
    } else {
      data.push(sect.id);
    }

    if (data.length > 0) {
      localStorage.setItem(props.lsEntry, JSON.stringify(data));
    } else {
      localStorage.removeItem(props.lsEntry);
    }
  },

  /**
   * Get state from localStorage determining if particular section is collapsed or expanded.
   * @param {HTMLElement} sect -- section to check in localStorage.
   * @returns {boolean} true if hidden ("collapsed"), false if not.
   */
  isSectionHidden: (sect: HTMLElement) => {
    if (localStorage.getItem(props.lsEntry) === null) {
      return false;
    }

    const data: string[] = JSON.parse(localStorage.getItem(
      props.lsEntry
    ) as string);

    if (data.includes(sect.id)) {
      return true;
    } else {
      return false;
    }
  }
};
