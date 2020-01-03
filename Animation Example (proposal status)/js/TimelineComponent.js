"use strict";

(function() {
    class TimelineButton extends HTMLElement {
        constructor() {
            super();

            const shadow = this.attachShadow({ mode: "open" });
            const timeline = document.createElement("div");
            timeline.id = "container";
            timeline.innerHTML = `

<head>
    <title>Timeline</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${timelineResourcesPath}/css/Timeline.css">
</head>

    <!-- A div element is used instead of a button to avoid default properties, 
         as well as allowing the element to resize with the animation. -->
        <div class="flow-artboard" style="visibility: hidden;">
            <div class="flow-artboard" id="Timeline">
                <div class="flow-layer group">
                <div class="flow-layer bitmap">
                    <svg class="flow-layer bitmap-svg" preserveAspectRatio="none" viewBox="0 0 1554 916">
                        <defs>
                            <clipPath id="timeline-bitmap-mask">
                                <path vector-effect="non-scaling-stroke" d="M0,0c0,0,1554,0,1554,0 0,0,0,916,0,916 0,0,-1554,0,-1554,0 0,0,0,-916,0,-916zM0,0">
                                </path>
                            </clipPath>
                        </defs>
                    </svg>
                    <div class="flow-layer mask_1">
                      <svg class="mask_1-svg" preserveAspectRatio="none" viewBox="0 0 1554 916">
                        <title>Mask</title>
                        <desc>Made with Flow.</desc>
                        <defs id="mask_1-defs">
                        </defs>
                      <path id="mask_1-path" vector-effect="non-scaling-stroke" d="M0,0c0,0,1554,0,1554,0 0,0,0,916,0,916 0,0,-1554,0,-1554,0 0,0,0,-916,0,-916zM0,0">
                        </path>
                      </svg>
                      <div class="flow-border mask_1-border"></div>
                    </div><div class="flow-layer bitmap_1"></div></div><div class="flow-layer rectangle">
                  <svg class="rectangle-svg" preserveAspectRatio="none" viewBox="0 0 280 848">
                    <title>Rectangle</title>
                    <desc>Made with Flow.</desc>
                    <defs id="rectangle-defs">
                    </defs>
                  <path id="rectangle-path" vector-effect="non-scaling-stroke" d="M0,0c0,0,280,0,280,0 0,0,0,848,0,848 0,0,-280,-0,-280,-0 0,0,0,-848,0,-848zM0,0">
                    </path>
                  </svg>
                  <div class="flow-border rectangle-border"></div>
                </div><div class="flow-layer alert">
                    <div class="flow-layer oval_copy">
                      <svg class="oval_copy-svg" preserveAspectRatio="none" viewBox="0 0 9 9">
                        <title>Oval Copy</title>
                        <desc>Made with Flow.</desc>
                        <defs id="oval_copy-defs">
                        </defs>
                      <path id="oval_copy-path" vector-effect="non-scaling-stroke" d="M4.5,9c2.485,0,4.5,-2.015,4.5,-4.5 0,-2.485,-2.015,-4.5,-4.5,-4.5 -2.485,0,-4.5,2.015,-4.5,4.5 0,2.485,2.015,4.5,4.5,4.5zM4.5,9">
                        </path>
                      </svg>
                      <div class="flow-border oval_copy-border"></div>
                    </div><div class="flow-layer new_activity_since_i">
                      New activity since in review view
                    </div>    <div class="flow-border alert-border"></div>
                </div>    <div class="flow-border group-border"></div>
            </div>
                <div class="flow-layer status">
                <div class="flow-layer group_5">
                    <div class="flow-layer mask_copy">
                      <svg class="mask_copy-svg" preserveAspectRatio="none" viewBox="0 0 247 203">
                        <title>Mask Copy</title>
                        <desc>Made with Flow.</desc>
                        <defs id="mask_copy-defs">
                        </defs>
                      <path id="mask_copy-path" vector-effect="non-scaling-stroke" d="M0.001,0c0,0,246.999,0.509,246.999,0.509 0,0,0,202.491,0,202.491 0,0,-246.999,-0,-246.999,-0 0,0,-0,-203,-0,-203zM0.001,0">
                        </path>
                      </svg>
                      <div class="flow-border mask_copy-border"></div>
                    </div><div class="flow-layer group_2_copy_4">
                        <div class="flow-layer group_2_copy">
                            <div class="flow-layer updated_by_aaron_ste">
                              Updated by Aaron Stevens
                            Sep 19, 2019 at 3:54 pm
                            </div><div class="flow-layer group_4">
                                <div class="flow-layer this_all_looks_good_">
                                  This all looks good.
                                </div><div class="flow-layer notes">
                                  Notes
                                </div>    <div class="flow-border group_4-border"></div>
                            </div><div class="flow-layer badge_warning">
                                <div class="flow-layer rectangle_10">
                                  <svg class="rectangle_10-svg" preserveAspectRatio="none" viewBox="0 0 86 24">
                                    <title>Rectangle 10</title>
                                    <desc>Made with Flow.</desc>
                                    <defs id="rectangle_10-defs">
                                    </defs>
                                  <path id="rectangle_10-path" vector-effect="non-scaling-stroke" d="M0,1c-0,-0.549,0.451,-1,1,-1 0,0,84,0,84,0 0.549,0,1,0.451,1,1 0,0,0,22,0,22 0,0.549,-0.451,1,-1,1 0,0,-84,0,-84,0 -0.549,0,-1,-0.451,-1,-1 0,0,0,0,0,0 0,0,0,-22,0,-22zM0,1">
                                    </path>
                                  </svg>
                                  <div class="flow-border rectangle_10-border"></div>
                                </div><div class="flow-layer _px_padding">
                                  APPROVED
                                </div>    <div class="flow-border badge_warning-border"></div>
                            </div>    <div class="flow-border group_2_copy-border"></div>
                        </div>    <div class="flow-border group_2_copy_4-border"></div>
                    </div><div class="flow-layer button_secondary_small">
                        <div class="flow-layer rectangle_1">
                          <svg class="rectangle_1-svg" preserveAspectRatio="none" viewBox="0 0 76 28">
                            <title>Rectangle</title>
                            <desc>Made with Flow.</desc>
                            <defs id="rectangle_1-defs">
                            </defs>
                          <path id="rectangle_1-path" vector-effect="non-scaling-stroke" d="M0,3c-0,-1.646,1.354,-3,3,-3 0,0,70,0,70,0 1.646,0,3,1.354,3,3 0,0,0,22,0,22 0,1.646,-1.354,3,-3,3 0,0,-70,0,-70,0 -1.646,0,-3,-1.354,-3,-3 0,0,0,-22,0,-22zM0,3">
                            </path>
                          </svg>
                          <div class="flow-border rectangle_1-border"></div>
                        </div><div class="flow-layer _px_padding_1">
                          Update
                        </div>    <div class="flow-border button_secondary_small-border"></div>
                    </div><div class="flow-layer line">
                      <svg class="line-svg" preserveAspectRatio="none" viewBox="0 0 227 1">
                        <title>Line</title>
                        <desc>Made with Flow.</desc>
                        <defs id="line-defs">
                        </defs>
                      <path id="line-path" vector-effect="non-scaling-stroke" d="M-0,0.5c0,0,227,0,227,0">
                        </path>
                      </svg>
                      <div class="flow-border line-border"></div>
                    </div><div class="flow-layer current_status">
                      Current status
                    </div>    <div class="flow-border group_5-border"></div>
                </div><div class="flow-layer group_6">
                    <div class="flow-layer mask_copy_1">
                      <svg class="mask_copy_1-svg" preserveAspectRatio="none" viewBox="0 0 247 537">
                        <title>Mask Copy</title>
                        <desc>Made with Flow.</desc>
                        <defs id="mask_copy_1-defs">
                        </defs>
                      <path id="mask_copy_1-path" vector-effect="non-scaling-stroke" d="M0.001,0c0,0,246.999,1.346,246.999,1.346 0,0,0,535.654,0,535.654 0,0,-246.999,-0,-246.999,-0 0,0,-0,-537,-0,-537zM0.001,0">
                        </path>
                      </svg>
                      <div class="flow-border mask_copy_1-border"></div>
                    </div><div class="flow-layer line_copy">
                      <svg class="line_copy-svg" preserveAspectRatio="none" viewBox="0 0 227 1">
                        <title>Line Copy</title>
                        <desc>Made with Flow.</desc>
                        <defs id="line_copy-defs">
                        </defs>
                      <path id="line_copy-path" vector-effect="non-scaling-stroke" d="M-0,0.5c0,0,227,0,227,0">
                        </path>
                      </svg>
                      <div class="flow-border line_copy-border"></div>
                    </div><div class="flow-layer line_copy_2">
                      <svg class="line_copy_2-svg" preserveAspectRatio="none" viewBox="0 0 227 1">
                        <title>Line Copy 2</title>
                        <desc>Made with Flow.</desc>
                        <defs id="line_copy_2-defs">
                        </defs>
                      <path id="line_copy_2-path" vector-effect="non-scaling-stroke" d="M-0,0.5c0,0,227,0,227,0">
                        </path>
                      </svg>
                      <div class="flow-border line_copy_2-border"></div>
                    </div><div class="flow-layer line_copy_3">
                      <svg class="line_copy_3-svg" preserveAspectRatio="none" viewBox="0 0 227 1">
                        <title>Line Copy 3</title>
                        <desc>Made with Flow.</desc>
                        <defs id="line_copy_3-defs">
                        </defs>
                      <path id="line_copy_3-path" vector-effect="non-scaling-stroke" d="M-0,0.5c0,0,227,0,227,0">
                        </path>
                      </svg>
                      <div class="flow-border line_copy_3-border"></div>
                    </div><div class="flow-layer line_copy_4">
                      <svg class="line_copy_4-svg" preserveAspectRatio="none" viewBox="0 0 227 1">
                        <title>Line Copy 4</title>
                        <desc>Made with Flow.</desc>
                        <defs id="line_copy_4-defs">
                        </defs>
                      <path id="line_copy_4-path" vector-effect="non-scaling-stroke" d="M-0,0.5c0,0,227,0,227,0">
                        </path>
                      </svg>
                      <div class="flow-border line_copy_4-border"></div>
                    </div><div class="flow-layer group_2_copy_2">
                        <div class="flow-layer group_2_copy_1">
                            <div class="flow-layer updated_by_aaron_ste_1">
                              Updated by Aaron Stevens
                            Sep 20, 2019 at 3:54 pm
                            </div><div class="flow-layer group_3">
                                <div class="flow-layer i_ve_attached_all_re">
                                  I’ve attached all relevant proof of future expenditure needs in order to keep current service level.
                                </div><div class="flow-layer notes_1">
                                  Notes
                                </div>    <div class="flow-border group_3-border"></div>
                            </div><div class="flow-layer badge_warning_1">
                                <div class="flow-layer rectangle_11">
                                  <svg class="rectangle_11-svg" preserveAspectRatio="none" viewBox="0 0 86 24">
                                    <title>Rectangle 10</title>
                                    <desc>Made with Flow.</desc>
                                    <defs id="rectangle_11-defs">
                                    </defs>
                                  <path id="rectangle_11-path" vector-effect="non-scaling-stroke" d="M0,1c-0,-0.549,0.451,-1,1,-1 0,0,84,0,84,0 0.549,0,1,0.451,1,1 0,0,0,22,0,22 0,0.549,-0.451,1,-1,1 0,0,-84,0,-84,0 -0.549,0,-1,-0.451,-1,-1 0,0,0,0,0,0 0,0,0,-22,0,-22zM0,1">
                                    </path>
                                  </svg>
                                  <div class="flow-border rectangle_11-border"></div>
                                </div><div class="flow-layer _px_padding_2">
                                  IN REVIEW
                                </div>    <div class="flow-border badge_warning_1-border"></div>
                            </div>    <div class="flow-border group_2_copy_1-border"></div>
                        </div>    <div class="flow-border group_2_copy_2-border"></div>
                    </div><div class="flow-layer history">
                      History
                    </div><div class="flow-layer group_2_copy_3">
                        <div class="flow-layer group_2_copy_5">
                            <div class="flow-layer created_by_aaron_ste">
                              Created by Aaron Stevens
                            Sep 19, 2019 at 3:54 pm
                            </div><div class="flow-layer badge_warning_2">
                                <div class="flow-layer rectangle_12">
                                  <svg class="rectangle_12-svg" preserveAspectRatio="none" viewBox="0 0 101 24">
                                    <title>Rectangle 10</title>
                                    <desc>Made with Flow.</desc>
                                    <defs id="rectangle_12-defs">
                                    </defs>
                                  <path id="rectangle_12-path" vector-effect="non-scaling-stroke" d="M0,1c-0,-0.549,0.451,-1,1,-1 0,0,99,0,99,0 0.549,0,1,0.451,1,1 0,0,0,22,0,22 0,0.549,-0.451,1,-1,1 0,0,-99,0,-99,0 -0.549,0,-1,-0.451,-1,-1 0,0,0,0,0,0 0,0,0,-22,0,-22zM0,1">
                                    </path>
                                  </svg>
                                  <div class="flow-border rectangle_12-border"></div>
                                </div><div class="flow-layer _px_padding_3">
                                  IN PROGRESS
                                </div>    <div class="flow-border badge_warning_2-border"></div>
                            </div>    <div class="flow-border group_2_copy_5-border"></div>
                        </div>    <div class="flow-border group_2_copy_3-border"></div>
                    </div><div class="flow-layer group_2_copy_6">
                        <div class="flow-layer group_2_copy_7">
                            <div class="flow-layer updated_by_aaron_ste_2">
                              Updated by Aaron Stevens
                            Sep 21, 2019 at 3:54 pm
                            </div><div class="flow-layer badge_warning_3">
                                <div class="flow-layer rectangle_13">
                                  <svg class="rectangle_13-svg" preserveAspectRatio="none" viewBox="0 0 114 24">
                                    <title>Rectangle 10</title>
                                    <desc>Made with Flow.</desc>
                                    <defs id="rectangle_13-defs">
                                    </defs>
                                  <path id="rectangle_13-path" vector-effect="non-scaling-stroke" d="M0,1c-0,-0.549,0.451,-1,1,-1 0,0,112,0,112,0 0.549,0,1,0.451,1,1 0,0,0,22,0,22 0,0.549,-0.451,1,-1,1 0,0,-112,0,-112,0 -0.549,0,-1,-0.451,-1,-1 0,0,0,0,0,0 0,0,0,-22,0,-22zM0,1">
                                    </path>
                                  </svg>
                                  <div class="flow-border rectangle_13-border"></div>
                                </div><div class="flow-layer _px_padding_4">
                                  NOT APPROVED
                                </div>    <div class="flow-border badge_warning_3-border"></div>
                            </div>    <div class="flow-border group_2_copy_7-border"></div>
                        </div>    <div class="flow-border group_2_copy_6-border"></div>
                    </div><div class="flow-layer group_2_copy_8">
                        <div class="flow-layer updated_by_aaron_ste_3">
                          Updated by Aaron Stevens
                        Sep 22, 2019 at 3:54 pm
                        </div><div class="flow-layer badge_warning_4">
                            <div class="flow-layer rectangle_14">
                              <svg class="rectangle_14-svg" preserveAspectRatio="none" viewBox="0 0 73 24">
                                <title>Rectangle 10</title>
                                <desc>Made with Flow.</desc>
                                <defs id="rectangle_14-defs">
                                </defs>
                              <path id="rectangle_14-path" vector-effect="non-scaling-stroke" d="M0,1c-0,-0.549,0.451,-1,1,-1 0,0,71,0,71,0 0.549,0,1,0.451,1,1 0,0,0,22,0,22 0,0.549,-0.451,1,-1,1 0,0,-71,0,-71,0 -0.549,0,-1,-0.451,-1,-1 0,0,0,0,0,0 0,0,0,-22,0,-22zM0,1">
                                </path>
                              </svg>
                              <div class="flow-border rectangle_14-border"></div>
                            </div><div class="flow-layer _px_padding_5">
                              ON HOLD
                            </div>    <div class="flow-border badge_warning_4-border"></div>
                        </div>    <div class="flow-border group_2_copy_8-border"></div>
                    </div>    <div class="flow-border group_6-border"></div>
                </div>    <div class="flow-border status-border"></div>
            </div>
                <div class="flow-layer icon_arrow_chevron_left">
                <div class="flow-layer mask_2">
                  <svg class="mask_2-svg" preserveAspectRatio="none" viewBox="0 0 10 16">
                    <title>Mask</title>
                    <desc>Made with Flow.</desc>
                    <defs id="mask_2-defs">
                    </defs>
                  <path id="mask_2-path" vector-effect="non-scaling-stroke" d="M6.5,0c0,0,-5.3,6.6,-5.3,6.6 0,0,-1.2,1.4,-1.2,1.4 0,0,1.2,1.4,1.2,1.4 0,0,5.2,6.6,5.2,6.6 0,0,3.6,0,3.6,0 0,0,-0.1,-0.1,-0.1,-0.1 0,0,-6.4,-7.9,-6.4,-7.9 0,0,6.5,-8,6.5,-8 0,0,-3.5,0,-3.5,0 0,0,0,0,0,0zM6.5,0">
                    </path>
                  </svg>
                  <div class="flow-border mask_2-border"></div>
                </div><div class="flow-layer color_primary_selection">
                    <div class="flow-border color_primary_selection-border"></div>
                </div>    <div class="flow-border icon_arrow_chevron_left-border"></div>
            </div>
                <div class="flow-layer group_7">
                <div class="flow-layer rectangle_9">
                  <svg class="rectangle_9-svg" preserveAspectRatio="none" viewBox="0 0 96 38">
                    <title>Rectangle 9</title>
                    <desc>Made with Flow.</desc>
                    <defs id="rectangle_9-defs">
                    </defs>
                  <path id="rectangle_9-path" vector-effect="non-scaling-stroke" d="M0,3c-0,-1.646,1.354,-3,3,-3 0,0,90,0,90,0 1.646,0,3,1.354,3,3 0,0,0,32,0,32 0,1.646,-1.354,3,-3,3 0,0,-90,0,-90,0 -1.646,0,-3,-1.354,-3,-3 0,0,0,-32,0,-32zM0,3">
                    </path>
                  </svg>
                  <div class="flow-border rectangle_9-border"></div>
                </div><div class="flow-layer reviews">
                  Reviews
                </div><div class="flow-layer balance">
                  Balance
                </div>    <div class="flow-border group_7-border"></div>
            </div>
                <div class="flow-layer group_2">
                <div class="flow-layer bitmap_2"></div><div class="flow-layer rectangle_2">
                  <svg class="rectangle_2-svg" preserveAspectRatio="none" viewBox="0 0 195 41">
                    <title>Rectangle</title>
                    <desc>Made with Flow.</desc>
                    <defs id="rectangle_2-defs">
                    </defs>
                  <path id="rectangle_2-path" vector-effect="non-scaling-stroke" d="M0,0c0,0,195,0,195,0 0,0,0,41,0,41 0,0,-195,0,-195,0 0,0,0,-41,0,-41zM0,0">
                    </path>
                  </svg>
                  <div class="flow-border rectangle_2-border"></div>
                </div>    <div class="flow-border group_2-border"></div>
            </div>
                </div>
        </div>
    `;
    shadow.append(timeline);

      const timer = document.createElement("div");
      timer.id = "timerID";
      timeline.append(timer);
        }
    }
    customElements.define("timeline-button", TimelineButton); 
})();
