<script>
  import { onMount } from "svelte";
  import "./page.css";

  let subdomains = [];
  let filterText = "";

  onMount(() => {
    // Example of how subdomains might be populated dynamically
    function populateSubdomains() {
      // This would typically be replaced with server-side rendering or an API call
      subdomains = [
        // Example data
        { name: "example", type: "Type A", owner: "Owner A" },
        // Add more subdomains as needed
      ];
    }

    populateSubdomains();
  });

  function filterSubdomains() {
    return subdomains.filter((subdomain) =>
      subdomain.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }

  function deleteSubdomain(subdomain) {
    // Implement delete functionality
  }

  function blacklistSubdomain(subdomain) {
    // Implement blacklist functionality
  }
</script>

<div class="content">
  <h1>Subdomain Management</h1>

  <input
    type="text"
    placeholder="Filter subdomains..."
    bind:value={filterText}
    class="filter-input"
  />

  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Subdomain Name</th>
          <th>Type</th>
          <th>Owner</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {#if filterSubdomains().length > 0}
          {#each filterSubdomains() as subdomain}
            <tr>
              <td>{subdomain.name}</td>
              <td>{subdomain.type}</td>
              <td>{subdomain.owner}</td>
              <td>
                <button
                  class="action-btn delete-btn"
                  on:click={() => deleteSubdomain(subdomain)}>Delete</button
                >
                <button
                  class="action-btn blacklist-btn"
                  on:click={() => blacklistSubdomain(subdomain)}
                  >Blacklist</button
                >
              </td>
            </tr>
          {/each}
        {:else}
          <tr>
            <td colspan="4">No subdomains found.</td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>
</div>
