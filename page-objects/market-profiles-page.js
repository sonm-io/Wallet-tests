module.exports = {
    elements: {
        profileFilters: by.css('.sonm-profiles__filters'),
        statusDropdown: by.css('.sonm-profiles__filter-status'),
        roleDropdown: by.css('.sonm-profiles__filter-role'),
        countryDropdown: by.css('.sonm-profiles__filter-country'),
        countryMultiselect: by.css('.multiselect__popup .multiselect__input-container'),
        selectedCountry: by.css('.multiselect__dropdown-wrapper'),
        applyCountrySearchBtn: by.css('.multiselect__apply-button-container button'),
        dealsDropdown: by.css('.sonm-profiles__filter-deals'),
        searchByNameField: by.css('input[name="query"]'),
        profileRaw: by.css('.ant-table-row-level-0'),
        profileName: by.css('.sonm-cell-address__name'),
        profileAddress: by.css('.sonm-hash.sonm-cell-address__hex')
    },

    //wait for load profiles page

    waitForMarketProfilesPageLoading: async function () {
        return await shared.wdHelper.findVisibleElement(this.elements.profileFilters);
    },

    //select from status dropdown

    selectProfileStatus: async function (profileStatus) {
        await (await shared.wdHelper.findVisibleElement(this.elements.statusDropdown)).click();
        return await (await shared.wdHelper.findVisibleElement(by.xpath('//button[.="' + profileStatus + '"]'))).click();
    },

    //select from role dropdown

    selectProfileRole: async function (role) {
        (await shared.wdHelper.findVisibleElement(this.elements.roleDropdown)).click();
        return await (await shared.wdHelper.findVisibleElement(by.xpath('//button[.="' + role + '"]'))).click();
    },

    //select from country dropdown

    selectCountry: async function (country) {
        await (await shared.wdHelper.findVisibleElement(this.elements.countryDropdown)).click();
        await (await shared.wdHelper.findVisibleElement(this.elements.countryDropdown)).sendKeys(country);
        return await (await shared.wdHelper.findVisibleElement(this.elements.applyCountrySearchBtn)).click();
    },

    //select from deals dropdown

    selectDealsQuantity: async function (dealsQuantity) {
        (await shared.wdHelper.findVisibleElement(this.elements.dealsDropdown)).click();
        return await (await shared.wdHelper.findVisibleElement(by.xpath('//button[.="' + dealsQuantity + '"]'))).click();
    },

    //fill search field for further search by name

    searchProfileByName: async function (profileName) {
        return await (await shared.wdHelper.findVisibleElement(this.elements.searchByNameField)).sendKeys(profileName);
    },

    //navigate to Profile Item page

    navigateToProfileItemPage: async function (profileAddress) {
        let profileList = await shared.wdHelper.findVisibleElements(this.elements.profileAddress);
        let profileCell;
        for (profileAddr of profileList) {
            if (await (await profileAddr.getText()).split().join().replace(/\n/, "") === profileAddress) {
                return profileCell = await (await shared.wdHelper.findVisibleElement(by.css(".ant-table-row:nth-of-type(" +
                    (profileList.indexOf(profileAddr) + 1) + ").ant-table-row-level-0"))).click();
            }
        }
        console.log(profileCell);
        profileCell.click();
    }
};