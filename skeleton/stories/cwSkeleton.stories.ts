import '~/theme/src/clay.css';
import '~/theme/src/main.css';
import SkeletonItem from '~/skeleton/src/SkeletonItem.vue';

export const SkeletonAvatar = () => ({
  components: { SkeletonItem },
  template: `
        <skeleton-item :avatar="true" height="lg" />
    `,
});

export const LmsUpdate = () => ({
    components: { SkeletonItem },
    template: `
        <div class="learning-management-wrapper cec-card cec-px-3 cec-mb-4">
            <div>
                <skeleton-item class="cec-my-1 p-1 w-70" :animation="true" height="sm" />
            </div>

            <a class="course-item mt-3">
                <div class="learning-profile">
                    <skeleton-item class="user-icon-lg my-2 w-10" :animation="true" height="lg" radius="lg"/>
                </div>
                <div class="learning-detail">
                    <div>
                        <skeleton-item class="w-50 cec-my-1 mb-1" :paragraph="true" height="sm" />
                    </div>
                    <div class="d-flex align-items-center">
                        <skeleton-item class="w-15 cec-my-1 p-1" :paragraph="true" height="sm" />
                    </div>
                    <div class="mt-1">
                        <skeleton-item class="w-15 cec-my-1 p-1" :paragraph="true" height="sm" />
                    </div>
                    <div class="mt-2 d-flex">
                        <div class="">
                            <skeleton-item class="cw-icon-sm" :animation="true" height="sm" />
                        </div>
                        <div>
                            <skeleton-item class="cw-icon-sm" :animation="true" height="sm" />
                        </div>
                    </div>
                </div>
                
            </a>
        </div>
    `
})

export const SkeletonCommunity = () => ({ 
    components: { SkeletonItem },
    template: `
      <div class="skeleton-community-wrapper ">
          <h1>List community in search</h1>
          <div class="cec-card community-search-tile mb-4 cec-px-4" >
              <div class="cec-card__body">
                  <div class="d-flex flex-column flex-lg-row flex-xl-row align-items-center">
                      <div class="align-self-center">
                          <div class="community-search-tile__profile">
                              <skeleton-item :avatar="true" />
                          </div>
                      </div>
                      <div class="w-100 ml-lg-4 ml-xl-4 pb-4 pb-lg-0 pb-xl-0 d-flex flex-column">
                          <div class="d-flex cec-mt-sm-0 cec-mt-2">
                              <skeleton-item class="skeleton-badge w-120" height="lg" />
                              <skeleton-item class="skeleton-badge w-120 cec-ml-1" height="lg" />
                          </div>
                          <div class="cec-mt-3">
                              <skeleton-item class="w-120" :paragraph="true" height="md" />
                              <skeleton-item class="w-180 cec-mt-2" :paragraph="true" height="sm" />
                          </div>
                      </div>
                      <div class="mt-4 mt-lg-0 mt-xl-0">
                          <skeleton-item class="skeleton-button" />
                      </div>
                  </div>
              </div>
          </div>
          <h1>List my community</h1>
          <div class="mb-4 cec-px-4 cec-card">
              <div class="d-flex flex-row align-items-center py-2 py-sm-4 border border-top-0 border-left-0 border-right-0 border-style-dash" v-for="index in 9" :key="index">
                  <div class="align-self-center">
                      <skeleton-item class="w-100-px mr-4 d-none d-sm-block" :avatar="true" />
                      <skeleton-item class="w-50-px mr-4 d-block d-sm-none" :avatar="true"/>
                  </div>
                  <div class="w-100 d-flex flex-column">
                      <div class="d-none d-sm-flex cec-mt-sm-0 cec-mt-2">
                          <skeleton-item class="skeleton-badge w-200" height="sm" />
                          <skeleton-item class="skeleton-badge w-120 cec-ml-1" height="sm" />
                      </div>
                      <div class="d-flex d-sm-none cec-mt-sm-0 cec-mt-2">
                          <skeleton-item class="skeleton-badge w-200" height="sm" />
                      </div>
                      <div class="cec-mt-3">
                          <skeleton-item class="w-120" :paragraph="true" height="md" />
                          <skeleton-item class="w-120 cec-mt-2" :paragraph="true" height="sm" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `,
  });

export const SkeletonLibrary = () => ({
    components: { SkeletonItem },
    template: `
    <div class="row m-0 activity-body-wrapper flex-fill cec-pt-md-6 cec-pt-4 "> 
        <div class="activity-card-wrapper p-0 border rounded min-width-272 cec-ml-md-6 cec-mb-md-6 cec-mx-md-0 cec-mx-4 cec-mb-4 col-md-3">
            <div class="activity-thumbnail d-flex justify-content-center align-items-center border-bottom position-relative min-height-120">
                <skeleton-item class="cw-icon-2xl w-100 min-height-120" :animation="true" radius="md" />
            </div>
            <div class="cec-p-3">
                <skeleton-item class="w-180 mb-2" :paragraph="true" height="sm" />
                <skeleton-item class="w-15 cec-my-1 p-1" :paragraph="true" height="sm" />
                <skeleton-item class="w-150" :paragraph="true" height="sm" />
            </div>
        </div>
    </div>
       
      `,
  });


  
export const SkeletonCourse = () => ({
  components: { SkeletonItem },
  template: `
        <h1>Render in my learning</h1>
        <div class="course-card-summary-wrapper w-100 d-flex flex-column flex-md-row border-bottom border-bottom-style-dash py-4">
            <div class="course-image mb-0 d-flex justify-content-center">
                <div class="image__wrapper w-320 w-xs-100 mw-100 h-129 h-sm-120">
                    <skeleton-item :animation="animation" class="skeleton-icon border-radius-4 cec-mr-lg-4 w-100 h-100"/>
                </div>
            </div>
            <div class="course-info mt-2 mt-lg-0 d-lg-block d-flex flex-wrap justify-content-center flex-fill">
                <div class="course-title-wrapper">
                    <skeleton-item :animation="animation" class="skeleton-icon course-title cec-mb-2 w-220"/>
                </div>
                <div class="w-100 d-lg-block d-flex justify-content-center">
                    <skeleton-item :animation="animation" class="skeleton-icon cec-mb-2 w-50-px"/>
                </div>
                <skeleton-item :animation="animation" class="w-90 cec-mb-2" :paragraph="true" height="md"/>
                <skeleton-item :animation="animation" class="w-90 cec-mb-2" :paragraph="true" height="md"/>
                <skeleton-item :animation="animation" class="w-90 cec-mb-2" :paragraph="true" height="md"/>
                <skeleton-item :animation="animation" class="w-70" :paragraph="true" height="md"/>
            </div>
        </div>
    `,
});

export const SkeletonManageCourse = () => ({
  components: { SkeletonItem },
  template: `
    <h1>Render in LMS Manage Course</h1>
    <div v-for="(rowCourse, index) in 4" :skey="index" class="course-card-summary-wrapper w-100 d-flex flex-column flex-md-row border-bottom border-bottom-style-dash py-4">
        <div class="course-image mb-0 d-flex justify-content-center">
            <div class="image__wrapper w-173-px mw-100 h-70-px">
                <skeleton-item :animation="animation" class="skeleton-icon border-radius-4 cec-mr-lg-6 w-100 h-100"/>
            </div>
        </div>
        <div class="course-info mt-2 mt-lg-0 d-lg-block d-flex flex-wrap justify-content-center flex-fill">
            <div class="course-title-wrapper">
                <skeleton-item :animation="animation" :paragraph="true" height="lg"
                    class="skeleton-icon course-title cec-mb-2 w-25"/>
            </div>
            <div class="w-100 d-lg-block d-flex justify-content-center">
                <skeleton-item :animation="animation" :paragraph="true" class="skeleton-icon course-desc cec-mb-2 cec-mt-4 w-50"/>
            </div>
            <div class="table-responsive word-break-initial cw-table-wrapper">
                <table class="course-instance-list cw-table table font-size-14 text-black cw-table--style-dashed last-child-border-0">
                    <thead class="thead--sm font-weight-bold border">
                        <th class="table-cell-content sort-column w-30">
                            <skeleton-item :animation="animation" height="sm" class="skeleton-icon w-100"/>
                        </th>
                        <th class="table-cell-content sort-column w-20">
                            <skeleton-item :animation="animation" height="sm" class="skeleton-icon w-100"/>
                        </th>
                        <th class="table-cell-content sort-column w-15">
                            <skeleton-item :animation="animation" height="sm" class="skeleton-icon w-100"/>
                        </th>
                        <th class="table-cell-content sort-column w-20">
                            <skeleton-item :animation="animation" height="sm" class="skeleton-icon w-100"/>
                        </th>
                        <th class="table-cell-content sort-column w-15">
                            <skeleton-item :animation="animation" height="sm" class="skeleton-icon w-100"/>
                        </th>
                    </thead>
                    <tbody>
                        <tr v-for="(rowm,index) in 2" :key="index">
                            <td><skeleton-item :animation="animation" :paragraph="true" height="lg" class="skeleton-icon w-100"/></td>
                            <td><skeleton-item :animation="animation" :paragraph="true" height="lg" class="skeleton-icon w-100"/></td>
                            <td><skeleton-item :animation="animation" :paragraph="true" height="lg" class="skeleton-icon w-100"/></td>
                            <td><skeleton-item :animation="animation" :paragraph="true" height="lg" class="skeleton-icon w-100"/></td>
                            <td><skeleton-item :animation="animation" :paragraph="true" height="lg" class="skeleton-icon w-100"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
      `,
});
